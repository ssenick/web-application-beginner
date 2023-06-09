import React, {useState} from 'react';
import '../../index.scss'

const Counter = () => {
   const [counter, setCounter] = useState(0)
   return (
         <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(prev => prev - 1)} className="minus">- Minus</button>
            <button onClick={() => setCounter(prev => prev + 1)} className="plus">Plus +</button>
         </div>
   );
};

export default Counter;