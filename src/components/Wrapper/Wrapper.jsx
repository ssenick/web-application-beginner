import React from 'react';
import "./Wrapper.scss"
const Wrapper = ({title,children}) => {
   return (

      <div className="wrapper">
         <div className="wrapper__container">
            <h2 className="wrapper__title">{title}</h2>
            {children}
         </div>

      </div>
   );
};

export default Wrapper;