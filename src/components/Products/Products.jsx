import React, {useEffect, useRef, useState} from 'react';
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/postService";
import './Products.scss'

const Products = () => {
   const products = useRef({});
   const categories = useRef([]);
   const limit = 15;
   const skip = 0;


   const [fetchPhotos, isPhotosLoading, errorPhotos] = useFetching(async (limit, skip) => {
      const response = await PostService.getPhotos(limit, skip);
      products.current = response.data.products;
      categories.current = repetitionSort(response.data.products);
   })
   useEffect(() => {
      fetchPhotos(limit, skip)
   }, [])

   const repetitionSort = (arr) => {
      const result = [];
      arr.forEach(item => {
         if (!result.includes(item.category)) {
            result.push(item.category)
         }
      })
      return result;
   }

   console.log(categories.current)
   return (
      <div className='products'>
         <div className="products__header">
            <div className="products__filter">

               {isPhotosLoading ?
                  categories.current.map((category, index) =>
                     <button key={index} type="button" className="products__button">
                        {category}
                     </button>
                  )
                  :
                  <h2>Loading...</h2>
               }
               {errorPhotos && <h2> The following error has occurred: <span>"{errorPhotos}"</span></h2>}

            </div>
            <div className="products__search">
               <input
                  type="text"/>
            </div>
         </div>
         <div className="products__items">

         </div>
      </div>
   );
};

export default Products;