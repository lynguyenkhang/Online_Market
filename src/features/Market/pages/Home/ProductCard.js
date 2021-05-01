import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';
import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addLike, deleteLike } from '../../../User/UserSlice'
import { useDispatch, useSelector } from 'react-redux'



const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    border: '1px solid #ccc',
    [theme.breakpoints.up('md')]: {
      borderRadius: 10,
    },
    margin: '0px auto',
  },

  cardMedia: {
    height: '100vw',
    width: 'calc(100% - 0px)',
    margin: '0px auto',
    [theme.breakpoints.up('md')]: {
      height: 250,
    },
    maxHeight: 450,
    paddingTop: 0,
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee',
  },

  cardContentName: {
    paddingBottom: 0,
    '& .MuiTypography-root:first-child': {
      fontSize: '1.1rem',
      fontWeight: 'bold',
    },
    '& .MuiTypography-root:last-child': {
      color: '#d0021b',
      fontWeight: 'bold',
    }
  },

  cardAction: {
    justifyContent: 'space-around',
    paddingTop: 10,

    '& .MuiButton-root': {
      color: '#666',
      textTransform: 'none',
      [theme.breakpoints.up('md')]: {padding: 6,}
    }
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  expandContent: {
    '& p:first-child': {
      fontWeight: 'bold'
    },
    '& p:last-child': {
      wordBreak: 'break-all',
      whiteSpace: 'break-spaces',
    }
  }
}));

export default function ProductCard(props) {
    const { 
        id,
        title,
        price,
        dateDiff,
        location,
        image,
        userName,
        userAvatar,
        describe,
        } = props

  const history = useHistory()
  const dispatch = useDispatch()
  const likes = useSelector(state => state.user.likes)

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [ like, setLike ] = useState(false)





  const handleView = () => {
    const url = `/product/${id}`
    setTimeout(() => history.push(url), 600)
  }


  const handleLike = () => {
      if(!like) dispatch(addLike(id))
      else dispatch(deleteLike(id))
      setLike(!like)
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  useEffect(() => {
    const condition = likes.indexOf(id)
    setLike(condition > -1)
  },[likes])

  return (

    <Card className={classes.card}>

      <CardHeader
        avatar={<Avatar src={userAvatar} />}
        title={userName}
        subheader={`${dateDiff} ở ${location}`}
      />

      <CardMedia className={classes.cardMedia}
        image={image}
        title={title}
      />


      <CardContent classes={{root: classes.cardContentName}}>
        <Typography noWrap children={title} />
        <Typography children={price} />
      </CardContent>
      

      <CardActions classes={{root: classes.cardAction}} disableSpacing>

        <Button 
            onClick={handleLike}
            variant="texted"
            startIcon={
                <FavoriteIcon
                    style={{color: `${like ? '#ed4956' : '#888'}`}}/>}
            children='Thích'
        />
        
        <Button 
            onClick={handleView}
            variant="texted"
            startIcon={<VisibilityIcon/>}
            children='Xem'
        />


        <Button 
            onClick={handleExpandClick}
            variant="texted"
            startIcon={
                <ExpandMoreIcon
                    className={clsx(classes.expand,
                    {[classes.expandOpen]: expanded,})}/>}
            children='Mô tả'
        />

      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.expandContent}>
          <Typography paragraph>Mô tả sản phẩm:</Typography>
          <Typography  paragraph >{describe}</Typography>
        </CardContent>
      </Collapse>
    </Card>

  );
}
