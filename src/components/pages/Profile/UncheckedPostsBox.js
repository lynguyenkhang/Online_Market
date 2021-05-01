import React from 'react'
import { Button, Typography, Grid, Container} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles'
import binocularIcon from '../../../assets/icons/binoculars.svg'
import { useHistory } from 'react-router-dom'



const useStyles = makeStyles(theme => ({
    root:{ 
        backgroundColor: '#fff',
        marginTop: '1rem',

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





export default function PostsBox({posts}) {
    const classes = useStyles()
    const history = useHistory()

    const changeURL = URL => {
        setTimeout(() => history.push(URL), 500)
    }

    const seePost = id => {
        setTimeout(() => history.push(`product/unchecked/${id}`), 500)
    }


    return (
        <Grid className={classes.root} container direction="column">
            <Grid item>
                <Container className={classes.TitleContainer}>
                    <Typography
                        variant="h6"
                        children='Bài đăng chưa duyệt'
                    />
                </Container>
            </Grid>

            {!posts.length && <Grid className={classes.emptyBox} item container justify="center" alignItems="center">
                <Container className={classes.emptyContainer} maxWidth="xs">

                    
                    <img className={classes.binocularIcon} src={binocularIcon} alt="a empty list"/>
                    <Alert icon={false} severity="warning">
                        Hiện tại không có bài đăng chưa được kiểm duyệt.
                    </Alert>
                    <Button
                        fullWidth
                        color="secondary"
                        variant="contained"
                        onClick={() => changeURL('/market/post')}
                        children="Đăng tin"
                    />
                </Container>
            </Grid>}

            {posts.length > 0 && <Grid item container>
                {posts.map(({images, id}) => 
                    <Grid className={classes.imageBox}
                    item xs={6} sm={3} lg={2}
                    onClick={() => seePost(id)}>
                        <img src={images[0]} alt={`${id} product`}/>
                    </Grid>)}
            </Grid>}




            
        </Grid>
    )
}
