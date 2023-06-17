import './index.scss';
import Counter from "./components/Counter/Counter";
import Modal from "./components/Modal/Modal";
import React, {useState} from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import Quiz from "./components/Quiz/Quiz";
import {quizQuestions} from "./constants /quizQuestions";
import {Users} from "./components/Users/Users";
import Blocks from "./components/Blocks/Blocks";
import Products from "./components/Products/Products";

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
            <Quiz quizQuestions={quizQuestions}/>
         </Wrapper>

         <Wrapper title="Users API">
            <Users/>
         </Wrapper>

         <Wrapper title="Currency convertor">
            <Blocks/>
         </Wrapper>

         <Wrapper block title="Products">
            <Products/>
         </Wrapper>

         <Modal/>
      </div>
   );
}

export default App;
