"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IoIosArrowBack } from "react-icons/io";


const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      description: 'lorem ipsem here there there is nothing but she do not understand and i think we broke up again lorem ipsem here there there is nothing but she do not understand and i think we broke up again lorem ipsem here there there is nothing but she do not understand and i think we broke up again'
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      description: 'lorem ipsem here there there is nothing but she do not understand and i think we broke up again lorem ipsem here there there is nothing but she do not understand and i think we broke up again lorem ipsem here there there is nothing but she do not understand and i think we broke up again'
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
      description: 'lorem ipsem here there there is nothing but she do not understand and i think we broke up again lorem ipsem here there there is nothing but she do not understand and i think we broke up again lorem ipsem here there there is nothing but she do not understand and i think we broke up again'
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
      description: 'lorem ipsem here there there is nothing but she do not understand and i think we broke up again lorem ipsem here there there is nothing but she do not understand and i think we broke up again lorem ipsem here there there is nothing but she do not understand and i think we broke up again'
  },
];

export default function TextMobileStepper() {
    
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    return (
      <Box sx={{ maxWidth: '100%', flexGrow: 1, marginTop: '9rem' }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 100,
            pl: 0,
            bgcolor: 'background.default',
            color: '#000000'
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <Box sx={{ height: 255, maxWidth: '100%', width: '100%', p: 0 }}>
          {images[activeStep].description}
        </Box>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {maxSteps === 0 ? (
                <IoIosArrowBack className='rotate-180' />
              ) : (
                <IoIosArrowBack className='rotate-180' />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {maxSteps === 0 ? (
                <IoIosArrowBack />
              ) : (
                <IoIosArrowBack />
              )}
              Back
            </Button>
          }
        />
      </Box>
    );
  }
  