import { Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import { useHistory } from 'react-router-dom';
import binocularIcon from '../../../assets/icons/binoculars.svg';


const useStyles = makeStyles(theme => ({
    root:{ 
        backgroundColor: '#fff',
        marginTop: '1rem',
        marginBottom: 80,
    },
    TitleContainer: {
        paddingTop: '0.3rem',
        paddingBottom: '0.3rem',
        borderBottom: '1px solid #ddd'
    },
    emptyBox: {
        padding: '2rem',
    },
    emptyContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& > img': {
            width: 100,
            height: 100,
            opacity: 0.3,
            marginBottom: 10,
        },
        '& .MuiButton-root': {
            marginTop: '1rem',
            textTransform: 'none',
        }
    },
    imageBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #eee',
        padding: '1.5rem',
        cursor: 'pointer',
        '& img': {
            width: '100%',
            borderRadius: 4,
            transition: 'all 330ms',
        },
        '& img:hover': {
            transform: 'scale(1.05)',
        }
    }

}))





export default function LikesBox({likes}) {
    const classes = useStyles()
    const history = useHistory()




    const changeURL = URL => {
        setTimeout(() => history.push(URL), 500)
    }

    const seePost = id => {
        setTimeout(() => history.push(`product/${id}`), 500)
    }


    return (
        <Grid className={classes.root} container direction="column">
            <Grid item>
                <Container className={classes.TitleContainer}>
                    <Typography
                        variant="h6"
                        children="Yêu thích"
                    />
                </Container>
            </Grid>

            {!likes.length && <Grid className={classes.emptyBox} item container justify="center" alignItems="center">
                <Container className={classes.emptyContainer} maxWidth="xs">

                    
                    <img className={classes.binocularIcon} src={binocularIcon} alt="empty posts list"/>
                    <Alert icon={false} severity="warning">
                        Bạn chưa yêu thích bài đăng nào, thử khám phá thêm nhiều bài đăng khác.
                    </Alert>
                    <Button
                        fullWidth
                        color="secondary"
                        variant="contained"
                        onClick={() => changeURL('/market/')}
                        children="Khám phá"
                    />
                </Container>
            </Grid>}

            {likes.length > 0 && <Grid item container>
                {likes.map(({images, id}) => 
                    <Grid className={classes.imageBox}
                    key={id}
                    item xs={6} sm={3} lg={2}
                    onClick={() => seePost(id)}>
                        <img src={images[0]} alt={`${id} - post`}/>
                    </Grid>)}
            </Grid>}




            
        </Grid>
    )
}
