import React, {useEffect, useRef, useState} from 'react';
import './Quiz.scss'
import QuizResult from "./QuizResult";

const Quiz = ({quizQuestions}) => {
   const [questionNumber, setQuestionNumber] = useState(0)
   const [progress, setProgress] = useState(0);
   let correctAnswers = useRef(0);

   const questionsChange = (index) => {
      setProgress(Math.round((questionNumber + 1) / quizQuestions.length * 100))
      setQuestionNumber(questionNumber + 1)
      if(index === quizQuestions[questionNumber].correct){
         correctAnswers.current++;
      }
   }
   const resetApp = () =>{
      setQuestionNumber(0)
      setProgress(0)
      correctAnswers.current = 0;
   }

   return (
      <div className="quiz">
         <div className="quiz__progress progress">
            <div style={{width: `${progress}%`}} className="progress__inner"></div>
         </div>
         <div className="quiz__body">
            {questionNumber < quizQuestions.length
               ?
               <>
                  <h2 className='quiz__title'>{quizQuestions[questionNumber].title}</h2>
                  <ul className="quiz__list">
                     {quizQuestions[questionNumber].variants.map((variant, index) =>
                        <li onClick={() => questionsChange(index)} key={index} className="quiz__item">{variant}</li>
                     )}
                  </ul>
               </>
               :
               <QuizResult answers={quizQuestions.length} correctAnswers={correctAnswers.current} resetApp={resetApp} />
            }


         </div>


      </div>
   );
};

export default Quiz;