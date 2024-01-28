import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import slide1 from '../../public/BannerSection1A.jpg';
import slide2 from '../../public/BannerSection2A .jpg';



function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}`,
    width:`${size * cols}`,
    height:`${size * rows}`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Banner() {
  return (
    <ImageList
      sx={{ width: '100%', height: 200, gap:0 }}
      variant="quilted"
      cols={2}
      rowHeight={'auto'}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.title} cols={item?.cols || 1} rows={item?.rows || 1}>
          <Image
            // {...srcset(item.img, 121, item.rows, item.cols)}
            src={item.img}
            alt={item.title}
            loading="lazy"
            fill
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    title: 'slide1',
    img: slide1,
    rows: 1,
    cols: 1,
  },
  {
    title: 'slide2',
    img: slide2,
    rows: 1,
    cols: 1,
  },
];
