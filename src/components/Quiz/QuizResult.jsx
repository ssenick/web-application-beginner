import React from 'react';

const QuizResult = () => {
   return (
      <div className="result">
         <img className='result__image' src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="image "/>
         <h2 className="result__title">Вы отгадали 3 ответа из 10</h2>
         <button className="result__button">Попробовать снова</button>
      </div>
   );
};

export default QuizResult;