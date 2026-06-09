import React from 'react'
import Banner from '@/app/components/Banner/Banner'
import DealsMonth from './components/DealsMonth/DealsMonth'





 function  Home() {
 

  return (
    <>
    <Banner/>
    <DealsMonth/>

    </>
  )
}

export default Home



// // API theke data fetch kora hocche
//   const data = await fetch('https://dummyjson.com/products?limit=100&skip=0')
//     .then(res => res.json());

//   // Object theke asol array-ta alada kora holo
//   const allProducts = data.products || [];

{/* <h1>sahim miah</h1>
      
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
      </div> */}