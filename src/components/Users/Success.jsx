import React from 'react';

export const Success = ({ count }) => {
   return (
      <div className="success-block">
         <img className="success-block__image" src="/assets/success.svg" alt="Success" />
         <h3 className="success-block__title">Successfully!</h3>
         <p className="success-block__text">An invitation has been sent to all {count} users.</p>
         <button className="success-block__send-invite-btn">Back</button>
      </div>
   );
};
