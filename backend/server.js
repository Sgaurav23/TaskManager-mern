const express = require('express');
const mongoose = require('mongoose');
const Task = require('./schema');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv')


dotenv.config()

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);  // Exit the process if there's a connection error
  });    

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'https://task-manager-mern-project.netlify.app',
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
 
// Routes
app.get('/api/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/api/tasks', async (req, res) => {
  const { title, description } = req.body;
  const newTask = new Task({ title, description });
  await newTask.save();
  res.status(201).send(newTask);
});

app.put('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).send(updatedTask);
});

app.delete('/api/tasks', async (req, res) => {
  await Task.deleteMany();
  res.status(200).send('All tasks deleted');
});

app.delete('/api/tasks/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send('Task deleted');
});
