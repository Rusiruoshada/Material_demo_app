import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';




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

interface imageDetails{
  img: any,
    title: string,
    cols:number,
    rows: number,
}

interface BannerProps {
  bannerImages:imageDetails[],
  item:imageDetails
}


const Banner:React.FC<BannerProps> = ({bannerImages}) => {
  return (
    <ImageList
      sx={{ width: '100%', height: 200}}
      variant="quilted"
      rowHeight={'auto'}
      gap={0}
    >
      {bannerImages.map((item) => (
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


export default Banner;