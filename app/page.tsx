import React from 'react';
import Carousel from '../component/CarouselImage/Carousel';
import { IoMdTime } from 'react-icons/io';
import { GrSend } from 'react-icons/gr';
import { FaRegCheckCircle } from 'react-icons/fa';
import { TbHandClick } from 'react-icons/tb';
import { GoThumbsup } from 'react-icons/go';
import { Box } from '@mui/material';
import Banner from '../component/banner/Banner';
import upperBannerSection1 from '../public/BannerSection1A.jpg';
import upperBannerSection2 from '../public/BannerSection2A .jpg';


const itemData = [
  {
    title: 'slide1',
    img: upperBannerSection1,
    rows: 1,
    cols: 1,
  },
  {
    title: 'slide2',
    img: upperBannerSection2,
    rows: 1,
    cols: 1,
  },
];

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
          <div className='flex justify-between overflow-y-hidden overflow-x-scroll whitespace-nowrap '>
            {itemsInContainer.map((item) => (
              <Box
                key={item.name}
                sx={{ display: 'flex', gap: '4px', fontSize: {xs:'10px',sm:'10px',md:'12px',lg:'14px'},alignItems:'center',padding:{xs:'25px 22px',sm:'25px 22px',md:'26px',lg:'35px'}}}
              >
                {item.icon}
                <span>{item.name}</span>
              </Box>
            ))}
          </div>
        </div>

        <Banner bannerImages={itemData}  />
      </main>
    </>
  );
}
