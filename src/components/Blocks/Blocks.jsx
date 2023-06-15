import React, {useEffect, useRef, useState} from 'react';
import './Blocks.scss';
import Block from "../Block/Block";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/postService";

const Blocks = () => {
   const defaultCurrencies = ['CAD', 'USD', 'EUR', 'GBP'];
   const [currencyOne, setCurrencyOne] = useState('CAD')
   const [currencyTwo, setCurrencyTwo] = useState('USD')
   const [inputValueOne, setInputValueOne] = useState(0)
   const [inputValueTwo, setInputValueTwo] = useState(1)
   // const [ratesRef, setRatesRef] = useState({})
      const ratesRef = useRef({})
   const [fetchRates, isRatesLoading, ratesIsError] = useFetching(async () => {
      const response = await PostService.getRates()
      ratesRef.current = {...response.data.data, 'USDUSD': '1'}
      onChangeValueTwo(1)
   })

   useEffect(() => {
      fetchRates();
   }, [])

   const onChangeValueOne = (value) => {

      const result = ((value / Number(ratesRef.current[`USD${currencyOne}`])) * Number(ratesRef.current[`USD${currencyTwo}`])).toFixed(3)

      setInputValueTwo(result)
      setInputValueOne(value)
   }
   const onChangeValueTwo = (value) => {
      const result = ((Number(ratesRef.current[`USD${currencyOne}`]) / Number(ratesRef.current[`USD${currencyTwo}`])) * value).toFixed(3);
      setInputValueOne(result)
      setInputValueTwo(value)
   }
   const onChangeCurrencyOne = (cur) => {
      setCurrencyOne(cur)
   }
   const onChangeCurrencyTwo = (cur) => {
      setCurrencyTwo(cur)
   }
   useEffect(() => {
      onChangeValueOne(inputValueOne)
   }, [currencyOne])

   useEffect(() => {
      onChangeValueTwo(inputValueTwo)
   }, [currencyTwo])

   return (
      <div className='blocks'>
         <Block value={inputValueOne}
                currency={currencyOne}
                defaultCurrencies={defaultCurrencies}
                onChangeValue={onChangeValueOne}
                onChangeCurrency={onChangeCurrencyOne}
                ratesIsError={ratesIsError}
         />

         <Block value={inputValueTwo}
                currency={currencyTwo}
                defaultCurrencies={defaultCurrencies}
                onChangeValue={onChangeValueTwo}
                onChangeCurrency={onChangeCurrencyTwo}
                ratesIsError={ratesIsError}
         />
      </div>
   );
};

export default Blocks;