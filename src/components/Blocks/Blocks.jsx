import React from 'react';
import './Blocks.scss';
import Block from "../Block/Block";

const Blocks = () => {
   const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP'];

   return (
      <div className='blocks'>
         <Block value={0}
                currency="RUB"
                defaultCurrencies={defaultCurrencies}
                onChangeCurrency={(cur) => console.log(cur)} />

         <Block value={0}
                defaultCurrencies={defaultCurrencies}
                currency="USD"
                onChangeCurrency={(cur) => console.log(cur)}
         />
      </div>
   );
};

export default Blocks;