import React, {useEffect, useMemo, useRef, useState} from 'react';
import Product from "../Product/Product";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/postService";
import './Products'

const ProductsNew = () => {

   const [products, setProducts] = useState([]);
   const categories = useRef([]);
   const [activeCategories, setActiveCategories] = useState(0);
   const [inputValue, setInputValue] = useState('');
   const limit = 15;
   const skip = 0;
   const [fetchPhotos, isPhotosLoading, errorPhotos] = useFetching(async (limit, skip) => {
      const response = await PostService.getPhotos(limit, skip);
      setProducts(response.data.products);
      categories.current = repetitionSort(response.data.products);
   })
   const repetitionSort = (arr) => {
      const result = ['All'];
      arr.forEach(item => {
         if (!result.includes(item.category)) {
            result.push(item.category)
         }
      })
      return result;
   }
   useEffect(() => {
      fetchPhotos(limit, skip)
   }, [])
   const checkAndSetCategory = (index) => {
      setActiveCategories(index);
   }

   const sortedProducts = useMemo(()=>{
         if(activeCategories){
            return [...products].filter(item=>{
               if (item.category.includes(categories.current[activeCategories])) {
                  return true;
               } else if (!item.category.includes(categories.current[activeCategories]) && !activeCategories) {
                  return true;
               }
            })
         }
         return products;
   },[products,activeCategories])

   const sortProducts = useMemo(()=>{
     return sortedProducts.filter(product=> product.title.toLowerCase().includes(inputValue.toLowerCase()))
   },[inputValue,sortedProducts])

   return (
      <div className='products '>
         <div className="products__header">
            <div className="products__filter">

               {!isPhotosLoading ?
                  categories.current.map((category, index) =>
                     <button
                        onClick={() => checkAndSetCategory(index)}
                        key={index}
                        type="button"
                        className={activeCategories === index ? 'products__button active' : 'products__button'}>
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
                  value={inputValue}
                  onChange={e=>setInputValue(e.target.value)}
                  type="text"
                  placeholder="Search name..."
               />
            </div>
         </div>
         <div className="products__items">
            {!isPhotosLoading && sortProducts.map(product =>
               <Product
                  key={product.id}
                  title={product.title}
                  images={product.images}
                  description={product.description}
                  discountPercentage={product.discountPercentage}
                  price={product.price}
                  rating={product.rating}
               />
            )}
         </div>
      </div>
   );
};

export default ProductsNew;