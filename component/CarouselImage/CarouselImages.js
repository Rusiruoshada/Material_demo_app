import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { IoIosArrowBack } from "react-icons/io";

export default function CarouselImages({ children, autoSlide=false, autoSlideInterval=3000 }) {
  
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));
  };

    useEffect(() => {
        if(autoSlide){
            const slideInterval =setInterval(next,autoSlideInterval);

            return () => clearInterval(slideInterval)
        }
    },[]);


  return (
    <div className='overflow-hidden relative '>
      <div
        className='flex transition-transform ease-out  duration-500 '
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-10'>
        <Button
          onClick={prev}
          textField={<IoIosArrowBack />}
          variant='contained'
          type='button'
          size='large'
          color='#000'
          padding='10px'
          minWidth = '10px'
          classNames='bg-slate-50/[.5] rounded-full text-gray-80 shadow hover:bg-white'
        />
        <Button
          onClick={next}
          textField={<IoIosArrowBack className='rotate-180 ' />}
          variant='contained'
          type='button'
          size='large'
          color='#000'
          padding='10px'
          minWidth = '10px'
          classNames='bg-slate-50/[.5] rounded-full text-gray-80 shadow hover:bg-white'
        />
      </div>
      
      <div className='absolute bottom-4 left-0 right-0'>
        <div className="flex items-center justify-center gap-2">
            {children.map((_, indicator)=> (
                <div 
                    key={indicator} 
                    className={`transition-all ease-out  w-5 h-2 bg-white rounded-full ${curr === indicator? "p-1": 'bg-opacity-50'}`}
                    onClick={next}
                 />
            ))}
        </div>

      </div>
    </div>
  );
}
