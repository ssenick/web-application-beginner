import React from 'react';
import './Quiz.scss'
const Quiz = ({title,variants,correct}) => {
   return (
      <div className="quiz">
            <div className="quiz__progress progress">
               <div style={{ width: '50%' }} className="progress__inner"></div>
            </div>
            <h2 className='quiz__title'>{title}</h2>
            <ul className="quiz__list">
               {variants.map(variant =>
                  <li key={variant} className="quiz__item">{variant}</li>
               )}
            </ul>
      </div>
   );
};

export default Quiz;