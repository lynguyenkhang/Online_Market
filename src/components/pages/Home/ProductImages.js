import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    // width: '80%',
    backgroundColor: '#fff',
    border: '1px solid #e5e5e5',

    '& .MuiMobileStepper-root': {
      borderTop: '1px solid #e5e5e5'
    }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: '#fff',
  },
  img: {
    display: 'block',
    maxHeight: 500,
    overflow: 'hidden',
    width: '80%',
    margin: '0px auto',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
      maxHeight: 500,
    },
    [theme.breakpoints.up('md')]: {
      width: '60%',
    }

  },

  imageBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },

  pagination: {
    flex: 1,
    width: 'calc(100% - 160px)',
    margin: '0px auto',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '& > img': {
      maxHeight: 70,
      padding: '0.75rem',
    }
  }
}));

function ProductImages({ images, pagination = true }) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
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

  const handleIndicator = index => {
    console.log(index)
    setActiveStep(index)
  }


  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} className={classes.imageBox}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button style={{ textTransform: 'none' }} size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Sau
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button style={{ textTransform: 'none' }} size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Trước
          </Button>
        }
      />

      {pagination &&
        <div className={classes.pagination}>
          {images.map((step, index) => (
            <img key={index} alt={index} src={step} onClick={() => handleIndicator(index)} />
          ))}
        </div>
      }

    </div>
  );
}

export default ProductImages;
