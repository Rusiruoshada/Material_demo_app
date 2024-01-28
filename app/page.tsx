import React from 'react';
import Carousel from '../component/CarouselImage/Carousel';
import { IoMdTime } from 'react-icons/io';
import { GrSend } from 'react-icons/gr';
import { FaRegCheckCircle } from 'react-icons/fa';
import { TbHandClick } from 'react-icons/tb';
import { GoThumbsup } from 'react-icons/go';
import { Box } from '@mui/material';
import Banner from '../component/banner/Banner';

export default function Home() {
  const itemsInContainer = [
    { name: 'Delivery within 24Hours', icon: <IoMdTime /> },
    { name: 'Deliver in Doorstep', icon: <GrSend /> },
    { name: 'Freshness Guaranteed', icon: <FaRegCheckCircle /> },
    { name: 'Click and Collect', icon: <TbHandClick /> },
    { name: 'Amazing Deals', icon: <GoThumbsup /> },
  ];

  return (
    <>
      <header className='lg:mt-[149px] mt-[90px] md:mt-[100px]'>
        <Carousel />
      </header>
      <main>
        <div className='flex justify-center'>
          <div className='flex justify-between'>
            {itemsInContainer.map((item) => (
              <Box
                key={item.name}
                sx={{ display: 'flex', gap: '4px', fontSize: '12px',alignItems:'center',padding:{xs:'5px',sm:'5px',md:'26px',lg:'35px' }}}
                className=''
              >
                {item.icon}
                <span>{item.name}</span>
              </Box>
            ))}
          </div>
        </div>

        <Banner  />
      </main>
    </>
  );
}
