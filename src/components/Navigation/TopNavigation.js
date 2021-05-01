import {
    AppBar,
    Button, Container, Grid,
    Hidden, Toolbar,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/images/logo_circle.png';
import auth from '../../firebase/auth';
import Layout from '../Layout';
import SearchBox from './SearchBox';






const urls = [
    { title: 'Trang chủ', url: '/market', Icon: HomeIcon },
    // {title: 'Yêu thích', url: '/market', Icon: FavoriteIcon},
    { title: 'Tài khoản', url: '/user', Icon: PersonIcon },
    { title: 'Đăng xuất', url: '/market', Icon: ExitToAppIcon },
]




const useStyles = makeStyles(theme => ({
    AppBar: {
        boxShadow: theme.shadows[0]
    },
    LinkButton: {
        margin: '0.3rem',
        color: '#555',
        textTransform: 'none',
    },
    buttonsGrid: { display: 'flex', justifyContent: 'flex-end', flex: 1 },
    signOutBtn: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        '& button': { textTransform: 'none', color: '#555' }
    },
    logo: {
        width: 60,
        marginRight: 10,
    },
    slogan: {
        fontWeight: 300,
        fontSize: '1rem',
        textTransform: 'none',
        fontStyle: 'italic',
    }

}));

function TopNavigation({ userName, adminCondition }) {
    const classes = useStyles()
    let history = useHistory()

    const handleChangeLink = url => {
        setTimeout(() => history.push(url), 600)
    }

    const backToHomePage = () => {
        setTimeout(() => history.push('/market'), 600)
    }


    return (

        <AppBar className={classes.AppBar} color="secondary" position="static">

            <Layout numberGrid={10} breakPoint="md" direction='column'>

                <Hidden mdUp>
                    <Container>
                        <Grid container>
                            <Grid item xs={8} sm={10}>
                                <Button onClick={backToHomePage}>
                                    <img className={classes.logo} src={Logo} alt="logo UEH Market"/>
                                    <Typography className={classes.slogan} variant="h6">
                                        Hi, {userName}
                                    </Typography>

                                </Button>
                            </Grid>

                            <Grid item xs={4} sm={2} className={classes.signOutBtn}>
                                <Button
                                    onClick={() => auth.signOut()}
                                    startIcon={<ExitToAppIcon />}
                                    children="Đăng xuất"
                                    size="small"
                                />
                            </Grid>

                        </Grid>
                    </Container>
                </Hidden>


                <Hidden smDown>
                    <Grid container style={{ padding: '10px 24px 0px' }}>
                        <Grid item xs={4}>
                            <Button onClick={backToHomePage}>
                                <img className={classes.logo} src={Logo} alt="logo UEH Market"/>
                                <Typography className={classes.slogan} variant="h6">
                                    Hi, {userName}
                                </Typography>


                            </Button>

                        </Grid>

                        <Grid item className={classes.buttonsGrid}>



                            {adminCondition &&
                                <Button
                                    // icon={SettingsIcon}
                                    onClick={() => handleChangeLink("/admin")}
                                    classes={{ root: classes.LinkButton }}
                                    startIcon={<SettingsIcon />}
                                    children="Admin"
                                    color='inherit' />
                            }




                            {urls.map(({ title, url, Icon }) => {
                                if (title !== "Đăng xuất") {
                                    return (
                                        <Button
                                            key={title}
                                            onClick={() => handleChangeLink(url)}
                                            classes={{ root: classes.LinkButton }}
                                            startIcon={<Icon />}
                                            children={title}
                                            color='inherit' />
                                    )
                                } else {
                                    return (
                                        <Button
                                            key={title}
                                            onClick={() => auth.signOut()}
                                            classes={{ root: classes.LinkButton }}
                                            startIcon={<Icon />}
                                            children={title}
                                            color='inherit' />
                                    )
                                }
                            })}
                        </Grid>
                    </Grid>
                </Hidden>

                <Grid>
                    <Toolbar >
                        <div style={{ flex: 1 }}>
                            <SearchBox onChange={() => console.log('ad')} />
                        </div>

                        <Hidden xsDown>
                            <Button
                                onClick={() => handleChangeLink('/market/post')}
                                style={{ textTransform: 'none' }}
                                color="primary"
                                variant="contained"
                                startIcon={<CreateIcon />}
                                children='Đăng tin'
                            />
                        </Hidden>
                    </Toolbar>
                </Grid>

            </Layout>

        </AppBar>


    )
}


export default TopNavigation
