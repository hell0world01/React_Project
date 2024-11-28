import React, { useState } from 'react'
import {slides} from './data'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
        setCurrentIndex(prev => {
            if(prev === 0) return slides.length - 1;
            return prev - 1
        })
    }
    const handleNext = () => {
        setCurrentIndex(prev => {
            if(prev === slides.length -1) return 0;
            return prev + 1;
        })
    }
    const selectedSlide = i => {
        setCurrentIndex(i)
    }
  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
            <div>
                <h1 className='capitalize text-gray-400'>Himalayan vogue</h1>
                <h2 className='uppercase text-5xl'>skyler 740</h2>
                <button className='uppercase bg-gray-900 px-4 rounded-full text-white'>
                    shop now
                </button>
                <button className='uppercase bg-gray-900 px-4 rounded-full text-white'>
                    view more
                </button>
            </div>
        </div>
        {/* Left Arrow*/}
        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl bg-black/20 rounded-full text-white cursor-pointer' onClick={handlePrev}>
            <BsChevronCompactLeft size={30}/>
        </div>
        {/* Right Arrow*/}
        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl bg-black/20 rounded-full text-white cursor-pointer' onClick={handleNext}>
            <BsChevronCompactRight size={30}/>
        </div>
        <div className='flex justify-center py-2'>
            {
                slides.map( (_, index) => { 
                    return (
                    <button onClick={() => selectedSlide(index)}>
                        <RxDotFilled />
                    </button>)})
            }
        </div>
    </div>
  )
}

export default Slider