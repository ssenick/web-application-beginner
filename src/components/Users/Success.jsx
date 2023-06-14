import React from 'react';

export const Success = ({ count,resetAll }) => {
   return (
      <li className="success-block">
         <img className="success-block__image" src="/assets/success.svg" alt="Success" />
         <h3 className="success-block__title">Successfully!</h3>
         {count > 1
            ?
            <p className="success-block__text">An invitation has been sent to all {count} users.</p>
            :
            <p className="success-block__text">An invitation has been sent to your user.</p>
         }

         <button onClick={resetAll} className="success-block__send-invite-btn">Back</button>
      </li>
   );
};
