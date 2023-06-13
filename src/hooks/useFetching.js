import {useState} from "react";


export function useFetching(callback) {
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState('');

   const fetching = async (...args) => {
      setIsLoading(true)
      try {
         await callback(...args);
      } catch (e) {
         setError(e.message)
      } finally {
         setIsLoading(false)
      }
   }
   return [fetching, isLoading, error]
}