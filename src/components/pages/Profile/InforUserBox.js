import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EventIcon from '@material-ui/icons/Event';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
    },
    leftBox: {
        padding: '16px 0px 16px 16px',
        borderBottom: '1px solid #d5d5d5',
        borderRight: '1px solid #d5d5d5',

        '& .MuiAvatar-root': {
            width: 80,
            height: 80,
            marginRight: 0,
        },
        '& > .MuiGrid-root:last-child': {
            paddingLeft: '1rem',
        }
    },

    rightBox: {
        padding: '16px 0px 16px 16px',
        borderBottom: '1px solid #d5d5d5',
        justifyContent: 'space-between',
        '& .MuiGrid-root': { marginBottom: '.5rem' },
        '& .MuiSvgIcon-root': {
            marginRight: '.5rem',
            color: '#888',
        }
    },

    editBtn: {
        textTransform: 'none',
        padding: '0px 9px',
        margin: '.5rem 0px',
    },



}))


function InforUserBox({ avatar, name, posts, likes, email, phoneNumber, date }) {
    const classes = useStyles()
    const history = useHistory()

    const changeToEditPage = () => {
        setTimeout(() => history.push('/user/dashboard'), 500)
    }


    return (
        <Grid className={classes.root} container>
            <Grid className={classes.leftBox} container item xs={12} sm={6}>
                <Grid item container justify="center" alignItems="center" xs={3}>
                    <Avatar src={avatar} />
                </Grid>

                <Grid item container xs={9} direction="column">

                    <Grid item>
                        <Typography children={name} />
                    </Grid>

                    <Grid item>

                        <Button
                            onClick={() => changeToEditPage()}
                            className={classes.editBtn}
                            variant="outlined"
                            children="Chỉnh sửa thông tin"
                        />

                    </Grid>

                    <Grid item container>
                        <Typography variant="subtitle2" >
                            <strong>{posts}</strong>
                            <span style={{ marginRight: '1rem' }}> bài đăng</span>
                            <strong>{likes}</strong>
                            <span> lần thích</span>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid className={classes.rightBox} container column item xs={12} sm={6}>

                <Grid item container>
                    <MailIcon />
                    <Typography variant="subtitle2">
                        {email}
                    </Typography>
                </Grid>

                <Grid item container>
                    <PhoneIcon />
                    <Typography variant="subtitle2">
                        {phoneNumber}
                    </Typography>
                </Grid>

                <Grid item container>
                    <EventIcon />
                    <Typography variant="subtitle2">
                        Ngày tham gia: {date}
                    </Typography>
                </Grid>


            </Grid>




        </Grid>
    )
}

export default InforUserBox
