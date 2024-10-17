
// import { useState, useEffect } from "react";
// import './calculator.css';
// import axios from 'axios';

// const API_URL = 'https://luminous-resonant-feels.glitch.me/history';

// function Calculator() {
//     const [input, setInput] = useState('');
//     const [result, setResult] = useState('');
//     const [history, setHistory] = useState([]);
//     const [showHistory, setShowHistory] = useState(false);

//     useEffect(() => {
//         axios.get(API_URL)
//             .then(response => setHistory(response.data))
//             .catch(err => console.error('Error fetching history:', err));
//     }, []);

//     const clear = () => {
//         setInput('');
//         setResult('');
//     };

//     const toggleHistory = () => {
//         setShowHistory(!showHistory);
//     };

//     const calculate = async () => {
//         try {
//             let res;
//             if (input.includes('log')) {
//                 res = Math.log10(parseFloat(input.split('log')[1])).toString();
//             } else if (input.includes('sin')) {
//                 const degrees = parseFloat(input.split('sin')[1]);
//                 const radians = (Math.PI / 180) * degrees;
//                 res = Math.sin(radians).toString();
//             } else if (input.includes('cos')) {
//                 const degrees = parseFloat(input.split('cos')[1]);
//                 const radians = (Math.PI / 180) * degrees;
//                 res = Math.cos(radians).toString();
//             } else if (input.includes('tan')) {
//                 const degrees = parseFloat(input.split('tan')[1]);
//                 const radians = (Math.PI / 180) * degrees;
//                 res = Math.tan(radians).toString();
//             } else {
//                 res = eval(input).toString();
//             }
//             setResult(res);
//             const newEntry = { expression: input, result: res };
//             await axios.post(API_URL, newEntry);
//             setHistory(prevHistory => [...prevHistory, newEntry]);
//         } catch (err) {
//             setResult('error');
//         }
//     };

//     const clearHistory = async () => {
//         try {
//             const response = await axios.delete(API_URL);
//             console.log(response.data.message);
//             setHistory([]); // Clear the history state
//         } catch (err) {
//             console.error('Error clearing history:', err);
//         }
//     };

//     const handleChange = (val) => {
//         setInput(input + val);
//     };

//     return (
//         <div className="calculator">
//             <h1>Calculator</h1>
//             <input type="text" value={input} readOnly placeholder="input" />
//             <input type="text" value={result} readOnly placeholder="result" />
//             <div className="buttons">
//                 {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '/', 'log', 'sin', 'cos', 'tan'].map((btn) => (
//                     <button onClick={() => handleChange(btn)} key={btn}>
//                         {btn}
//                     </button>
//                 ))}
//                 <button onClick={clear}>clear</button>
//                 <button onClick={calculate}>=</button>
//                 <button onClick={clearHistory}>clrHtry</button>
//                 <button onClick={toggleHistory}>histry</button>
//             </div>
//             {showHistory && (
//                 <div className="history">
//                     <h2>History</h2>
//                     <ul>
//                         {history.map((item, index) => (
//                             <li key={index}>
//                                 {item.expression} = {item.result}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Calculator;









import { useState, useEffect } from "react";
import './calculator.css';
import axios from 'axios';
const API_URL = 'https://luminous-resonant-feels.glitch.me/history';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setHistory(response.data))
      .catch(err => console.error('Error fetching history:', err));
  }, []);

  const clear = () => {
    setInput('');
    setResult('');
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const calculate = async () => {
    try {
      let res;
      if (input.includes('log')) {
        res = Math.log10(parseFloat(input.split('log')[1])).toString();
      } else if (input.includes('sin')) {
        const degrees = parseFloat(input.split('sin')[1]);
        const radians = (Math.PI / 180) * degrees;
        res = Math.sin(radians).toString();
      } else if (input.includes('cos')) {
        const degrees = parseFloat(input.split('cos')[1]);
        const radians = (Math.PI / 180) * degrees;
        res = Math.cos(radians).toString();
      } else if (input.includes('tan')) {
        const degrees = parseFloat(input.split('tan')[1]);
        const radians = (Math.PI / 180) * degrees;
        res = Math.tan(radians).toString();
      } else {
        res = eval(input).toString();
      }
      setResult(res);
      const newEntry = { expression: input, result: res };
      await axios.post(API_URL, newEntry);
      setHistory(prevHistory => [...prevHistory, newEntry]);
    } catch (err) {
      setResult('error');
    }
  };

  const clearHistory = async () => {
    try {
      const response = await axios.delete(API_URL);
      console.log(response.data.message);
      setHistory([]); // Clear the history state
    } catch (err) {
      console.error('Error clearing history:', err);
    }
  };

  const handleChange = (val) => {
    setInput(input + val);
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input type="text" value={input} readOnly placeholder="input" />
      <input type="text" value={result} readOnly placeholder="result" />
      <div className="buttons">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '/', 'log', 'sin', 'cos', 'tan'].map((btn) => (
          <button onClick={() => handleChange(btn)} key={btn} className="number">{btn}</button>
        ))}
        {['+', '-', '*', '/'].map((btn) => (
          <button onClick={() => handleChange(btn)} key={btn} className="function">{btn}</button>
        ))}
        {['log', 'sin', 'cos', 'tan'].map((btn) => (
          <button onClick={() => handleChange(btn)} key={btn} className="utility">{btn}</button>
        ))}
        <button onClick={clear} className="utility clear">Clear</button>
        <button onClick={calculate} className="function calculate">=</button>
        <button onClick={clearHistory} className="utility clearHistory">Clear History</button>
        <button onClick={toggleHistory} className="utility toggleHistory">History</button>
      </div>
      {showHistory && (
        <div className="history">
          <h2>History</h2>
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                {item.expression} = {item.result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Calculator