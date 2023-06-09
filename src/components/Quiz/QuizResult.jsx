import React from 'react';

const QuizResult = ({correctAnswers,answers,resetApp}) => {
   return (
      <div className="result">
         {correctAnswers > 0
         ?
            <>
               <img className='result__image' src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="image "/>
               <h2 className="result__title">You guessed {correctAnswers} answers out of {answers}</h2>
            </>
            :
            <h2 className='result__title'> We're sorry, but you don't have the right answers :( </h2>
         }

         <button onClick={resetApp} className="result__button">Try again</button>
      </div>
   );
};

export default QuizResult;