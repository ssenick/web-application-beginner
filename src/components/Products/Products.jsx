import React, {useEffect, useRef, useState} from 'react';
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/postService";
import './Products.scss'
import Product from "../Product/Product";

const Products = () => {
   const products = useRef({});
   const categories = useRef([]);
   const [activeCategories, setActiveCategories] = useState(0);
   const [inputValue, setInputValue] = useState('');
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
   const onChange = (e) => {
      setInputValue(e.target.value)
   }
   const repetitionSort = (arr) => {
      const result = ['All'];
      arr.forEach(item => {
         if (!result.includes(item.category)) {
            result.push(item.category)
         }
      })
      return result;
   }

   const checkAndSetCategory = (index) => {
      setActiveCategories(index);
   }



   const filterProducts = (item) => {
      const searchString = item.title.toLowerCase();
      const inputValueText = inputValue.toLowerCase();
      if (item.category.includes(categories.current[activeCategories]) && !inputValueText) {
         return true;
      } else if (!item.category.includes(categories.current[activeCategories]) && !activeCategories && !inputValueText) {
         return true;
      }
      if (searchString.includes(inputValueText)) {
         return true;
      }

   }

   console.log(products.current)
   return (
      <div className='products'>
         <div className="products__header">
            <div className="products__filter">

               {!isPhotosLoading ?
                  categories.current.map((category, index) =>
                     <button onClick={() => checkAndSetCategory(index)} key={index}
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
                  onChange={onChange}
                  type="text"
                  placeholder="Search name..."
               />
            </div>
         </div>
         <div className="products__items">
            {!isPhotosLoading && products.current.filter(filterProducts).map(product =>
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

export default Products;