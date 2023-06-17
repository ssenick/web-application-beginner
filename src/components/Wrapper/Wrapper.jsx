import React from 'react';
import "./Wrapper.scss"
const Wrapper = ({title,block = false,children}) => {
   return (

      <div className={block ? 'wrapper block' : 'wrapper'}>
         <div className= {block ? 'wrapper__container block' : 'wrapper__container'}>
            {title && <h2 className="wrapper__title">{title}</h2>}
            {children}
         </div>

      </div>
   );
};

export default Wrapper;