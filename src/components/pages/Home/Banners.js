import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import banner1 from '../../../assets/images/banner1.png'
import banner2 from '../../../assets/images/banner2.png'



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "banner1",
    imgPath: banner1,
  },
  {
    label: "banner2",
    imgPath: banner2,
  }
];


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100vw',
      flexGrow: 1,
      position: 'relative',
      marginTop: 1,
    },
    img: {
      height: 100,
      [theme.breakpoints.up('sm')]: {
        height: 150,
      },

      display: "block",
        width: '100%',
      overflow: "hidden",

    },
    MobileStepper: {
        position: 'absolute',
        width: 300,
        paddingBottom: '1rem',
        backgroundColor: 'rgba(0,0,0,0)',
        // backgroundColor: 'red',
        left: 'calc(50% - 150px)',
        bottom: 0,
        justifyContent: 'center'
    },
    StepperDots: {
        width: '.6rem',
        height: '.6rem',
        margin: '0px .5rem',
    }
  }));




function Carousel() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  
    return (
      <div className={classes.root} >


        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
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
          variant="dots"
          activeStep={activeStep}
          classes={{root: classes.MobileStepper, dot: classes.StepperDots}}
      
        />
      </div>
    );
}

export default Carousel
