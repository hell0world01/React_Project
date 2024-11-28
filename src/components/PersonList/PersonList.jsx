import React from 'react'
import Person from './Person'
const PersonList = () => {
    const personData = [
        {img: 22, name: "Amrit", job: 'Developer'},
        {img: 33, name: "Dev", job: 'Video-Editor'},
        {img: 16, name: "Ayush", job: 'Designer'}
    ]

  return (
    <div>
        {
            personData.map( value =>  <Person {...value}/>)
        }
    </div>
  )
}

export default PersonList