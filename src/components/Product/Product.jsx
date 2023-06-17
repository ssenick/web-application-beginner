import React from 'react';
import './Product.scss'
const Product = ({title,images,rating,price,discountPercentage,description}) => {
   return (
      <div className="product">
         <div className="product__title">{title}</div>

         <div className="product__images">

            <div className="product__image-big ">
               <div className="product__rating">{rating}</div>
               <img src={images[0]} alt="Image product"/>
            </div>
            {images.map((image,index)=>
               {
                  if(index !== 0  && index < 4){
                   return(
                      <div key={index} className="product__image ">
                         <img src={image} alt="Image product"/>
                      </div>
                   )
                  } else if(images.length < 2 ){
                     return (
                        <div key={index} className="product__image ">
                           {/*<img src={image} alt="Image product"/>*/}
                        </div>
                     )
                  }
               }
            )}
         </div>

         <div className="product__content">
            <div className="product__price">Price: {price} <span>-{discountPercentage}%</span></div>
            <div className="product__description">{description}</div>
         </div>
      </div>
   );
};

export default Product;