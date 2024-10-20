import { useState, useEffect } from 'react';
import axios from 'axios';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get('https://coral-luxurious-vest.glitch.me/api/tasks');
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const addTask = async () => {
    const newTask = { title, description };
    try {
      const { data } = await axios.post('https://coral-luxurious-vest.glitch.me/api/tasks', newTask);
      setTasks([...tasks, data]);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`https://coral-luxurious-vest.glitch.me/api/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const editTask = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
    setTitle(task.title);
    setDescription(task.description);
  };

  const updateTask = async () => {
    const updatedTask = { ...currentTask, title, description };
    try {
      const { data } = await axios.put(`https://coral-luxurious-vest.glitch.me/api/tasks/${currentTask._id}`, updatedTask);
      setTasks(tasks.map(task => (task._id === currentTask._id ? data : task)));
      setIsEditing(false);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const clearAllTasks = async () => {
    try {
      await axios.delete('https://coral-luxurious-vest.glitch.me/api/tasks');
      setTasks([]);
    } catch (error) {
      console.error('Error clearing tasks:', error);
    }
  };

  const toggleCompleted = async (id) => {
    const task = tasks.find(task => task._id === id);
    const updatedTask = { ...task, completed: !task.completed };
    try {
      const { data } = await axios.put(`https://coral-luxurious-vest.glitch.me/api/tasks/${id}`, updatedTask);
      setTasks(tasks.map(task => (task._id === id ? data : task)));
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Task Manager</h1>
      <div className="task-inputs">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="input-field"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="input-field"
        />
        <button onClick={isEditing ? updateTask : addTask} className="add-button">
          {isEditing ? 'Update Task' : 'Add Task'}
        </button>
        <button onClick={clearAllTasks} className="clear-button">Clear All Tasks</button>
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task._id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span>{task.title} - {task.description}</span>
            <button onClick={() => toggleCompleted(task._id)} className="complete-button">
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => editTask(task)} className="edit-button">Edit</button>
            <button onClick={() => deleteTask(task._id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
