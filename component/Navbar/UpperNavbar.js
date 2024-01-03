import React from 'react';
import { LuLogIn } from 'react-icons/lu';
import { IoLocationSharp } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';
import { PiSignInBold } from 'react-icons/pi';
import { Box } from '@mui/material';
import Link from 'next/link';

export default function UpperNavbar() {
  const upperNavbarLinks = [
    { link: 'Track Your Order', icon: <LuLogIn /> },
    { link: 'Store Location', icon: <IoLocationSharp /> },
    { link: 'Shipping Method', icon: <TbTruckDelivery /> },
    { link: 'SignUp | LogIn', icon: <PiSignInBold /> },
  ];

  return (
    <Box
      sx={{ display: { xs: 'none', md: 'block' } }}
      className='bg-[var(--primaryDark)] default-header-top-bar text-[var(--textWhite)] py-2 lg:px-[var(--paddingUpperNav)] px-[var(--defaultPaddingSm)] md:px-[var(--defaultPaddingMd)]'
    >
        <div  className='flex flex-col'>
            <div className='flex flex-row justify-end gap-3' >
                {upperNavbarLinks.map((link, index) => (
                        <Link href={`/${link.link}`} key={index} className="nav-item flex flex-row items-center	">
                                {link.icon}
                                <span className='text-xs px-1 '>{link.link}</span>
                                <span className='px-1'>|</span>
                        </Link>
                ))}
            </div>
        </div>
    </Box>
  );
}

{
  /* <div className="flex flex-col">
            <div className='flex flex-row justify-end gap-3'>
                <div className="nav-item flex flex-row items-center	">
                    <LuLogIn />
                    <span className='text-xs px-1 '>Track Your Order</span>
                    <span className='px-1'>|</span>
                </div>
                <div className="nav-item flex flex-row items-center	">
                    <IoLocationSharp />
                    <span className='text-xs px-1 '>Store Location</span>
                    <span className='px-1'>|</span>
                </div>
                <div className="nav-item flex flex-row items-center	">
                    <TbTruckDelivery />
                    <span className='text-xs px-1 '>Shipping Method</span>
                    <span className='px-1'>|</span>
                </div>
                <div className="nav-item flex flex-row items-center	">
                    <PiSignInBold />
                    <span className='text-xs px-1 '>SignUp | LogIn</span>
                </div>
            </div>
        </div> */
}
