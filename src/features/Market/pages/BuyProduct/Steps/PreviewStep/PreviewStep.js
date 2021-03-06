import {
    Button, Container, InputAdornment,

    Typography
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import InputText from '../../../../../../components/pages/BuyProduct/InputText';
import StepsBar from '../../../../../../components/pages/BuyProduct/StepsBar';
import UploadImage from '../../../../../../components/pages/BuyProduct/UploadImage';
import { addDotsToPrice } from '../../../../../../tools/adjustPrice';
import FinishButton from '../../FinishButton/FinishButton';
import './PreviewStep.css';




const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 20,
    },
    imagesBox: {
        display: 'flex',
        overflowX: 'scroll',
        padding: '2.5rem 0px 1rem 0px',
    },
    InforBox: {
        textTransform: 'none'
    }
}));


const InforBox = (props) => {
    const history = useHistory()
    const classes = useStyles()

    const handleChangeLink = url => {
        setTimeout(() => history.push(url), 1000)
    }

    return (
        <Button className={classes.InforBox} onClick={() => handleChangeLink(props.url)} disableElevation fullWidth >
            <InputText
                styleForm={{margin: '0.3rem 0px'}}
                {...props}
                InputProps={{
                    // disableUnderline: true,
                    readOnly: true,
                }}
            />
        </Button>
    )
} 




function PreviewStep({stepsPercent}) {
    const classes = useStyles()

    const { images, title, category, price, address, describe } = useSelector(state => state.market.postedProduct)
    const phoneNumber = useSelector(state => state.auth.user.phoneNumber)

    const { url } = useRouteMatch()
    
    const CommonLinkStep = url.slice(0, url.length - 1)
    const LinkStep2 = CommonLinkStep + "2"
    const LinkStep3 = CommonLinkStep + "3"
    const LinkStep4 = CommonLinkStep + "4"
    const LinkStep5 = CommonLinkStep + "5"
    const LinkStep6 = CommonLinkStep + "6"

    const LinkStep1 = url.slice(0, 12)
    

    const BackToMaketLink = url.slice(0, 7)



    return (
        <Container className={classes.container}>

                <Typography gutterBottom variant="h6" align="center">
                    Xem l???i tin ????ng
                </Typography>

                <StepsBar percent={stepsPercent} />

                <div className={classes.imagesBox}>
                    {images.map(({ link }) => (
                    <Link to={LinkStep6}>
                        <UploadImage
                            link={link}
                            closeBtn={false}
                        />
                    </Link>
                    ))}
                </div>


                <InforBox
                    url={LinkStep1}
                    label="Danh m???c"
                    value={category.category}
                 />

                <InforBox
                    url={LinkStep3}
                    label="Ti??u ?????"
                    value={title}
                />

                <InforBox
                    url={LinkStep2}
                    label="T???nh, th??nh ph???"
                    value={address.city}
                />

                <InforBox
                    url={LinkStep2}
                    label="Qu???n, huy???n, th??? x??"
                    value={address.district}
                />


                <InforBox
                    url={LinkStep2}
                    label="Ph?????ng, x??, th??? tr???n"
                    value={address.ward}
                />

                <InforBox
                    url={LinkStep2}
                    label="S??? nh??, t??n ???????ng"
                    value={address.street}
                />

                <InforBox
                    label="S??? ??i???n tho???i"
                    value={phoneNumber}
                    disabled
                />


                <InforBox
                    url={LinkStep5}
                    label="Gi??"
                    value={addDotsToPrice(`${price}`)}
                    InputProps={{
                        readOnly: true,
                        endAdornment: <InputAdornment position="end">VN??</InputAdornment>,

                    }}
                />


                <InforBox
                    url={LinkStep4}
                    label="M?? t???"
                    value={describe}
                    multiline={true}
                    rows={5}
                    rowsMax={5}
                />

            <FinishButton url={BackToMaketLink}/>

        </Container>

    )
}

export default PreviewStep
