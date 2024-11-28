import React from 'react'
import './style.css'

const Person = ( {img, name, job} ) => {
    const URL = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className='person'>
        <img src={URL} alt="" />
        <div>
            <h4>{name}</h4>
            <h4>{job}</h4>
        </div>
    </div>
  )
}

export default Person