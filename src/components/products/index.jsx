import React from 'react'
import ProductItem from './components'

const ProductList = ({dataSet}) => {
  return (
    <div>
        <h3>Ecommerce project 2024</h3>
        <ul>
            {dataSet.map((value,index) => {
                return(
                    <ProductItem val={value} key={index}/>
                )
            })}
        </ul>
    </div>
  )
}

export default ProductList