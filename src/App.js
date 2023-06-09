import './index.scss';
import Counter from "./components/Counter/Counter";
import Modal from "./components/Modal/Modal";
import React, {useState} from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import Quiz from "./components/Quiz/Quiz";
import QuizResult from "./components/Quiz/QuizResult";
import {quizQuestions} from "./constants /quizQuestions";

function App() {
   const [isActiveModal, setIsActiveModal] = useState(false)
   const openModal = () => {
      setIsActiveModal(true)
   }
   const closeModal = () => {
      setIsActiveModal(false)
   }


   return (
      <div className="App">

         <Wrapper title='Counter'>
            <Counter/>
         </Wrapper>

         <Wrapper title='Modal window'>
            <button onClick={openModal} className="open-modal-btn">✨Open the window</button>
            <Modal closeModal={closeModal} isActiveModal={isActiveModal}/>
         </Wrapper>

         <Wrapper title='Quiz'>
            <Quiz title={quizQuestions[0].title} variants={quizQuestions[0].variants} correct={quizQuestions[0].correct}/>
            <QuizResult/>
         </Wrapper>

         <Modal/>
      </div>
   );
}

export default App;
