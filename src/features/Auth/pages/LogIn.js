import {
  Grid,
  Hidden, Paper, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useDispatch, useSelector } from 'react-redux';
import bg from '../../../assets/images/bg_login.png';
import logoUEH from '../../../assets/images/logo_UEH_Login.png';
import Warning from '../../../components/Warning';
import auth, { uiConfig } from '../../../firebase/auth';
import { fetchAuthStateObserver } from '../AuthSlice';



const useStyles = makeStyles((theme) => ({
  smContainer: {
    height: 'calc(100vh - 100px)',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    bottom: 0,
    zIndex: -1,
    paddingTop: 30,
    '& ..firebaseui-idp-list': {
      margin: 0,
    }
  },

  lgContainer: {
    height: '100vh',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    bottom: 0,
    zIndex: -1,
    paddingTop: 30,
    '& ..firebaseui-idp-list': {
      margin: 0,
    }
  },




  smLogoBox: {
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.5rem 1rem',
    paddingBottom: 15,
    backgroundColor: 'rgba(255,255,255,1)',
    '& > img': {
      width: '70%',
      marginBottom: '1.5rem',
    },

    '& > h6': {
      fontStyle: `italic`,
      fontWeight: `300`,
      fontSize: `1rem`,
      lineHeight: `1.6`,
      letterSpacing: `0.0075em`,
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    },
  },


  lgLogoBox: {
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.5rem 1rem',
    paddingBottom: 15,
    backgroundColor: 'rgba(255,255,255,1)',
    '& > img': {
      width: '70%',
      marginBottom: '1.5rem',
    },

    '& > h6': {
      fontStyle: `italic`,
      fontWeight: `300`,
      fontSize: `1rem`,
      lineHeight: `1.6`,
      letterSpacing: `0.0075em`,
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    },
  },
}))


function PageLogIn(props) {
  const classes = useStyles();
  const error = useSelector(state => state.auth.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAuthStateObserver())
  }, [])


  return (
    <div className="PageLogIn">


      <Grid conatiner>

        <Hidden lgUp >

          <Paper className={classes.smLogoBox}>
            <img src={logoUEH} />
            <Typography variant="h6">
              Chợ điện tử dành cho sinh viên UEH
                    </Typography>
            <Warning condition={error.length > 0} content={error} />
          </Paper>

          <div className={classes.smContainer}>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          </div>
        </Hidden>

        <Hidden mdDown>
          <Grid container>
            <Grid item lg={8}>
              <div className={classes.lgContainer}>
              </div>
            </Grid>

            <Grid item lg={4} className={classes.lgLogoBox}>

              <img src={logoUEH} />
              <Typography variant="h6">
                Chợ điện tử dành cho sinh viên UEH
                      </Typography>
              <Warning condition={error.length > 0} content={error} />
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
            </Grid>
          </Grid>
        </Hidden>
      </Grid>

    </div>
  );
}



export default PageLogIn
