
// import { useState, useEffect } from "react";
// import './calculator.css';
// import io from 'socket.io-client';

// const socket = io('http://localhost:3000');

// function Calculator() {
//     const [input, setInput] = useState('');
//     const [result, setResult] = useState('');
//     const [history, setHistory] = useState([]);
//     const [showHistory, setShowHistory] = useState(false);

//     useEffect(() => {
//         fetch('http://localhost:3000/history')
//             .then(response => response.json())
//             .then(data => setHistory(data))
//             .catch(err => console.error('Error fetching history:', err));

//         socket.on('message', (message) => {
//             setHistory(prevHistory => [...prevHistory, message]);
//         });

//         return () => {
//             socket.off('message');
//         };
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
//             socket.emit('sendMessage', newEntry);
//             setHistory(prevHistory => [...prevHistory, newEntry]);
//         } catch (err) {
//             setResult('error');
//         }
//     };

//     const clearHistory = async () => {
//         try {
//             const response = await fetch('http://localhost:3000/history', {
//                 method: 'DELETE'
//             });
//             const data = await response.json();
//             console.log(data.message);
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





// import { useState, useEffect } from "react";
// import './calculator.css';

// import io from 'socket.io-client';

// const socket = io('https://luminous-resonant-feels.glitch.me');

// function Calculator() {
//     const [input, setInput] = useState('');
//     const [result, setResult] = useState('');
//     const [history, setHistory] = useState([]);
//     const [showHistory, setShowHistory] = useState(false);

//     useEffect(() => {
//         fetch('https://luminous-resonant-feels.glitch.me/history')
//             .then(response => response.json())
//             .then(data => setHistory(data))
//             .catch(err => console.error('Error fetching history:', err));

//         socket.on('message', (message) => {
//             setHistory(prevHistory => [...prevHistory, message]);
//         });

//         return () => {
//             socket.off('message');
//         };
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
//             socket.emit('sendMessage', newEntry);
//             setHistory(prevHistory => [...prevHistory, newEntry]);
//         } catch (err) {
//             setResult('error');
//         }
//     };

//     const clearHistory = async () => {
//         try {
//             const response = await fetch('https://luminous-resonant-feels.glitch.me/history', {
//                 method: 'DELETE'
//             });
//             const data = await response.json();
//             console.log(data.message);
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
                    <button onClick={() => handleChange(btn)} key={btn}>
                        {btn}
                    </button>
                ))}
                <button onClick={clear}>clear</button>
                <button onClick={calculate}>=</button>
                <button onClick={clearHistory}>clrHtry</button>
                <button onClick={toggleHistory}>histry</button>
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

export default Calculator;
