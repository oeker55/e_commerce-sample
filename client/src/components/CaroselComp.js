import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useState } from 'react';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Yüksek Teknolojili Laptop',
    imgPath:
      'http://blogs.windows.com/wp-content/uploads/sites/2/2014/04/p55t_5F00_488B697C.jpg',
  },
  {
    label: 'En iyi Oyun Bigisayarları',
    imgPath:
      'https://i.pinimg.com/originals/0b/5f/c8/0b5fc864c174f4bea7e93892e5eeb00a.jpg',
  },
  {
    label: 'Lenovo',
    imgPath:
      'https://cdn.mos.cms.futurecdn.net/q3NVYX9QB7AUY3WE483VoY.jpg',
  },
  {
    label: 'Macbook Air',
    imgPath:
      'https://www.teahub.io/photos/full/55-552795_wallpaper-laptop-macbook-iphone-apple-journal-laptop-hd.jpg',
  },
];




const CaroselComp = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  
    return (
      <Box sx={{ maxWidth: 900, flexGrow: 1 }}>
        <Paper
          square
          elevation={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography variant="subtitle1" >{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 500,
                    display: 'block',
                    maxWidth: 900,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
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
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    );
}


export default CaroselComp;
