import { Avatar, Button, Container, Grid, Hidden, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EventIcon from '@material-ui/icons/Event'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import VisibilityIcon from '@material-ui/icons/Visibility'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Layout from '../../../components/Layout'
import BotNavigation from '../../../components/Navigation/BotNavigation'
import TopNavigation from '../../../components/Navigation/TopNavigation'
import ProductImages from '../../../components/pages/Home/ProductImages'
import { addDotsToPrice } from '../../../tools/adjustPrice'
import {changeDateFormat, changeDateFormat2} from '../../../tools/changeDateFormat'


import DateDiffFunction from '../../../tools/dateDiff'
import { loadProduct, cleanUp, changeProductStatus } from '../AdminSlice'
import { Alert } from '@material-ui/lab';


const useStyles = makeStyles(theme => ({
    root: {
        paddingBottom: '70px',
    },
    leftBox: {
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
            height: '100%',

        }
    },
    title: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
    },
    price: {
        color: '#d0021b',
        fontWeight: 'bold'
    },
    infor: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        backgroundColor: '#fff',
        border: '1px solid #e5e5e5',
        borderTop: 0,

        '& .MuiTypography-root': {
            marginBottom: '.6rem',
        },

    },
    unhightlighted: {
        fontSize: 14,
        opacity: 0.5,
        // color: '#333',
        display: 'flex',
        alignItems: 'center',
        '& .MuiSvgIcon-root': { marginRight: '0.5rem' }
    },
    user: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        backgroundColor: '#fff',
        border: '1px solid #e5e5e5',
        borderTop: 0,


        '& > div': {
            display: 'flex',
            alignItems: 'center',
            '& .MuiAvatar-root': {
                width: 55,
                height: 55,
                marginRight: '1rem',
            },
        },
        '& .MuiButtonBase-root': {
            // height: '40px',
            textTransform: 'none',
            margin: 'auto 0px',
            color: 'white',
            backgroundColor: '#33a837',
        }
    },
    describeBox: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        backgroundColor: '#fff',
        border: '1px solid #e5e5e5',
        borderTop: 0,

        '& > p:last-child': {
            whiteSpace: 'break-spaces',
            overflowWrap: 'break-word',
        }
    },
    checkStatusNote: {
        fontWeight: 400,
        marginBottom: '0.5rem',
        '& strong': {
            color: theme.palette.primary.main
        }
    }
}))





export default function AdminProduct() {
    const { productID } = useParams()
    const classes = useStyles()

    const dispatch = useDispatch()
    const { product } = useSelector(state => state.admin)
    const { displayName, email } = useSelector(state => state.auth.user)

    const [positionAlert, setPositionAlert] = useState(-100);
    const [currentStatus, setCurrentStatus] = useState()


    const handleUpdate = () => {

        dispatch(changeProductStatus({
            id: productID,
            newStatus: !currentStatus,
        }))

        setPositionAlert(-100);
        setTimeout(() => setPositionAlert(0), 500)
        setTimeout(() => setPositionAlert(-100), 60000)
    }

    useEffect(() => {
        setCurrentStatus(product.check)
    }, [product.check])

    useEffect(() => {
        dispatch(loadProduct(productID))
        return function clean() {
            dispatch(cleanUp())
        }
    }, [])


    if (product.price !== undefined) {

        const dotPrice = addDotsToPrice(`${product.price}`) + " đ"

        const date = new Date(product.time)

        let dateString = date.toLocaleDateString();
        if(dateString.indexOf('-') > -1){
            dateString = changeDateFormat2(date.toLocaleDateString())
        } else {
            dateString = changeDateFormat(date.toLocaleDateString())
        }

        const dateDiff = DateDiffFunction(date, new Date()) + " trước"

        const { street, ward, district, city } = product.address

        return (
            <div className={classes.root}>
                <TopNavigation userName={displayName} adminCondition={email === process.env.REACT_APP_ADMIN} />

                <Layout numberGrid={10} breakPoint="md">

                    <Grid item xs={12} style={{ height: '50px' }}>
                        <Container>
                            <Alert severity="success" style={{
                                transition: 'all 330ms',
                                transform: `translateX(${positionAlert}vw)`
                            }}>
                                Đã cập nhật thành công
                            </Alert>
                        </Container>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Container className={classes.leftBox}>

                            <Hidden smDown>
                                <ProductImages images={product.images} />
                            </Hidden>

                            <Hidden mdUp>
                                <ProductImages images={product.images} pagination={false} />

                                <Container className={classes.infor}>
                                    <Typography variant="h6" >
                                        {product.title}
                                    </Typography>

                                    <Typography className={classes.price}>
                                        {dotPrice}
                                    </Typography>

                                    <Typography className={classes.unhightlighted}>
                                        <EventIcon />
                                        {`${dateString} (${dateDiff})`}
                                    </Typography>

                                    <Typography className={classes.unhightlighted}>
                                        <LocationOnIcon />
                                        {`${street}, ${ward}, ${district}, ${city}`}
                                    </Typography>

                                    <Typography className={classes.unhightlighted}>
                                        <VisibilityIcon />
                                        {`${product.view} lượt xem`}
                                    </Typography>

                                </Container>

                                <Container className={classes.user}>
                                    <div>
                                        <Avatar src={product.author.avatar} />
                                        <Typography >
                                            {product.author.name}
                                        </Typography>
                                    </div>
                                    <Button
                                        component="a"
                                        href={`tel: ${product.author.phoneNumber}`}
                                        children="Liên hệ"
                                        variant="contained"
                                        startIcon={<PhoneIcon />}
                                        size="small"
                                    />
                                </Container>

                                <Container className={classes.describeBox}>
                                    <Typography variant="h6">Mô tả:</Typography>
                                    <Typography>{product.describe}</Typography>
                                </Container>

                                <Container className={classes.describeBox}>
                                    <Typography variant="h6" className={classes.checkStatusNote}>
                                        Sản phẩm này
                                        <strong>
                                            {currentStatus ? " đã duyệt" : " chưa duyệt"}
                                        </strong>
                                    </Typography>
                                    <Button
                                        onClick={handleUpdate}
                                        color={currentStatus ? "Secondary" : "Primary"}
                                        variant="contained"
                                        style={{ marginLeft: 'auto', display: 'block' }}
                                    >
                                        {currentStatus ? " Bỏ duyệt" : " Duyệt"}
                                    </Button>
                                </Container>

                            </Hidden>

                        </Container>
                    </Grid>

                    <Grid item xs={12} md={5} style={{ display: 'flex', flexDirection: 'column' }} >
                        <Hidden smDown>

                            <Container className={classes.user}>
                                <div>
                                    <Avatar src={product.author.avatar} />
                                    <Typography >
                                        {product.author.name}
                                    </Typography>
                                </div>
                                <Button
                                    component="a"
                                    href={`tel: ${product.author.phoneNumber}`}
                                    children="Liên hệ"
                                    variant="contained"
                                    startIcon={<PhoneIcon />}
                                    size="small"
                                />
                            </Container>


                            <Container className={classes.infor}>
                                <Typography variant="h6" >
                                    {product.title}
                                </Typography>

                                <Typography className={classes.price}>
                                    {dotPrice}
                                </Typography>

                                <Typography className={classes.unhightlighted}>
                                    <EventIcon />
                                    {`${dateString} (${dateDiff})`}
                                </Typography>

                                <Typography className={classes.unhightlighted}>
                                    <LocationOnIcon />
                                    {`${street}, ${ward}, ${district}, ${city}`}
                                </Typography>

                                <Typography className={classes.unhightlighted}>
                                    <VisibilityIcon />
                                    {`${product.view} lượt xem`}
                                </Typography>

                            </Container>


                            <Container className={classes.describeBox} style={{ flex: 1 }}>
                                <Typography variant="h6">Mô tả:</Typography>
                                <Typography>{product.describe}</Typography>

                            </Container>

                            <Container className={classes.describeBox}>
                                <Typography variant="h6" className={classes.checkStatusNote}>
                                    Sản phẩm này
                                    <strong>
                                        {currentStatus ? " đã duyệt" : " chưa duyệt"}
                                    </strong>
                                </Typography>
                                <Button
                                    onClick={handleUpdate}
                                    color={currentStatus ? "Secondary" : "Primary"}
                                    variant="contained"
                                    style={{ marginLeft: 'auto', display: 'block' }}
                                >
                                    {currentStatus ? " Bỏ duyệt" : " Duyệt"}
                                </Button>



                            </Container>

                        </Hidden>
                    </Grid>

                </Layout>
                <BotNavigation page={3} adminCondition={email === process.env.REACT_APP_ADMIN}/>


            </div>
        )
    } else return (<div></div>)
}
