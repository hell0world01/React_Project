import React, { useState } from 'react'
import {ArrowBigLeft, ArrowBigRight} from 'lucide-react'
const ImageSlider = ({imageUrls}) => {

    const [imgIndex, setImgIndex] = useState(0)

    function showPrevImg() {
        setImgIndex(index => {
            if(index === 0) return imageUrls.length - 1
            return index - 1
        })
    }
    function showNextImg() {
        setImgIndex(index => {
            if(index === imageUrls.length - 1) return 0
            return index + 1
        })
    }
        
  return (
    <div className='w-full h-full'>
        <img src={imageUrls[imgIndex]} className='object-cover w-full h-full relative' alt="" />
        <button onClick={showPrevImg} className='absolute top-0 bottom-0 left-0'>
            <ArrowBigLeft className='w-9 h-9 fill-black stroke-slate-100'/>
        </button>
        <button onClick={showNextImg} className='absolute top-0 bottom-0 right-0'>
            <ArrowBigRight className='w-9 h-9 fill-black stroke-slate-100'/>
        </button>
    </div>
  )
}

export default ImageSlider