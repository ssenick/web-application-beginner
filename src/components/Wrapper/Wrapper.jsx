import React from 'react';

const Wrapper = ({title,children}) => {
   return (

      <div className="wrapper">
         <h2 className="wrapper__title">{title}</h2>
         {children}
      </div>
   );
};

export default Wrapper;