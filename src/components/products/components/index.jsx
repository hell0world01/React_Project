import {React, useState} from 'react'



const ButtonComponent = () => {
    const [count, setCount] = useState(0);
    function handleChange(){
        setCount(count + 1)
    }
    

    return <button onClick={handleChange} className='hover:bg-gray-100'>Click {count}</button>
}

const ProductItem = ({val}) => {
  return (
    <div>
        <p>{val}</p>
        <ButtonComponent />
    </div>
  )
}

export default ProductItem