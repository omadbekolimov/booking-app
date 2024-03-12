import React from 'react'
import Button from './button'

const FirstSection = () => {
    return (
        <div className='flex justify-between items-center w-full h-full'>
            <div className='w-1/2'>
                <h1 className='text-[2.7rem] leading-[3rem] font-bold tracking-wide'>
                    Online Hospitality <br /> facility finder system <br /> a right place.
                </h1>
                <p className='mt-7 w-[70%] leading-5 opacity-80'>
                    In case you want to access the near by hospitality facilities services this is the  right place for you.
                </p>
                <h5>want nearby facilities on the map? click below</h5>
                <Button name={"View on map"} />
            </div>
            <div className='w-1/2'>
                <img src="..." alt="first img" />
            </div>
        </div>
    )
}

export default FirstSection