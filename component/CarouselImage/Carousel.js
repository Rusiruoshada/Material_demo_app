'use client';

import React from 'react';
import CarouselImages from './CarouselImages';
import Image from 'next/image';
import slide1 from '../../public/slide1.png';
import slide2 from '../../public/slide2.png';
import slide3 from '../../public/slide3.jpg';
import slide4 from '../../public/slide4.jpg';
import slide5 from '../../public/slide5.jpg';


export default function Carousel() {
  const images = [
    {
      label: 'slide1',
      imgPath: slide1,
    },
    {
      label: 'slide2',
      imgPath: slide2,
    },
    {
      label: 'slide3',
      imgPath: slide3,
    },
    {
      label: 'slide4',
      imgPath: slide4,
    },
    {
      label: 'slide5',
      imgPath: slide5,
    },
  ];

  return (
    <div className='App'>
      <div className='w-full'>
        <CarouselImages autoSlide={true} autoSlideInterval={3000}>
          {images.map((image) => (
            <Image
              key={image.label}
              src={image.imgPath}
              alt={image.label}
              width={'-webkit-fill-available'}
              height={'100vh'}
              className='lg:h-screen lg:w-screen h-dvh w-dvw'
            />
          ))}
        </CarouselImages>
      </div>
    </div>
  );
}
