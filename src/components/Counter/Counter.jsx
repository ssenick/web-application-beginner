import React, {useState} from 'react';
import '../../index.scss'

const Counter = () => {
   const [counter, setCounter] = useState(0)
   return (
      <div className="wrapper">
         <div>
            <h2>Счетчик:</h2>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(prev => prev - 1)} className="minus">- Минус</button>
            <button onClick={() => setCounter(prev => prev + 1)} className="plus">Плюс +</button>
         </div>
      </div>
   );
};

export default Counter;