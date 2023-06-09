import React, {useState} from 'react';
import './Counter.scss'
const Counter = () => {
   const [counter, setCounter] = useState(0)
   return (
         <div className="counter">
            <h2 className='counter__title'>{counter}</h2>
            <button onClick={() => setCounter(prev => prev - 1)} className="counter__btn counter__btn_minus">- Minus</button>
            <button onClick={() => setCounter(prev => prev + 1)} className="counter__btn counter__btn_plus">Plus +</button>
         </div>
   );
};

export default Counter;