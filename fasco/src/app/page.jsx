import React from 'react'
import Image from 'next/image' 
import hero1 from '../assets/hero-1.png'

 async function  Home() {

// API theke data fetch kora hocche
  const data = await fetch('https://dummyjson.com/products?limit=100&skip=0')
    .then(res => res.json());

  // Object theke asol array-ta alada kora holo
  const allProducts = data.products || [];


  return (
    <div> 
      
      
      <h1>sahim miah</h1>
      
      home page nagd udsydd
      
      <Image src={hero1} alt="Hero Image" priority />

      <div>
        {
          allProducts.map((product) => ( 
              <div key={product.id}>

                <p>{product.price}</p>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
              </div>
          ))
        }
      </div>
      </div>
  )
}

export default Home