import {
    Container,
    Typography
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LinearProgressWithLabel from '../../../../../../components/LinearProgressWithLabel'
import Overlay from '../../../../../../components/Overlay'
import CameraUpload from '../../../../../../components/pages/BuyProduct/CameraUpload'
import StepsBar from '../../../../../../components/pages/BuyProduct/StepsBar'
import UploadImage from '../../../../../../components/pages/BuyProduct/UploadImage'
import ZoomImage from '../../../../../../components/pages/BuyProduct/ZoomImage'
import {
    deleteImage,
    postingImage,
    resetErrors
} from '../../../../MarketSlice'
import AlertInfor from '../../AlertInfor/AlertInfor'
import NextStepButton from '../../NextStepButton/NextStepButton'




const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 20,
    },
    imagesBox: {
        display: 'flex',
        overflowX: 'scroll',
        padding: '2.5rem 0px 1rem 0px',
    }
}));


function UploadStep({ url, stepsPercent }) {

    const classes = useStyles()
    const [bigImage, setBigImage] = useState("")
    const [showBigImage, setShowBigImage] = useState(false)
    const [imagesLengthBeforeUpload, setImagesLengthBeforeUpload] = useState(0)

    const [chosenFilesLength, setChosenFilesLength] = useState(0)
    const [percent, setPercent] = useState(0)
    const [error, setError] = useState(false)

    const { images, errors } = useSelector(state => state.market.postedProduct)
    const dispatch = useDispatch();

    const checkError = () => {
        if (images.length < 1) {
            setError(true)
            return true
        } else {
            setError(false)
            return false
        }
    }

    const closeOverlay = () => {
        setShowBigImage(!showBigImage)
    }

    const handleOnChange = async e => {
        setPercent(0)
        const { files } = e.target
        if (files.length) {
            setPercent(1)
            setImagesLengthBeforeUpload(images.length)
            setChosenFilesLength(files.length)
            for (let i = 0; i < files.length; i++) {
                const file = files[i]
                dispatch(postingImage(file))
            }
        }
    }

    const zoomImage = linkImage => {
        setBigImage(linkImage)
        setShowBigImage(true)
    }

    const handleDeleteImage = index => {
        dispatch(deleteImage(index))
    }


    const updateCurrentPercent = () => {
        const added = images.length - imagesLengthBeforeUpload + errors.length

        if ((added > 0) && chosenFilesLength !== 0) {
            const currentPercent = Math.ceil((added / chosenFilesLength) * 100)
            setPercent(currentPercent)
        }

        if (added === chosenFilesLength) {
            setImagesLengthBeforeUpload(0)
            setChosenFilesLength(0)
            dispatch(resetErrors())
        }

    }

    useEffect(() => {
        updateCurrentPercent()
    }, [images])




    return (

        <Container className={classes.container}>


            <Typography gutterBottom variant="h6" align="center">
                Hình ảnh
            </Typography>

            <StepsBar percent={stepsPercent} />



            <Overlay condition={showBigImage} func={closeOverlay} />

            <ZoomImage
                condition={showBigImage}
                image={bigImage}
                func={() => setShowBigImage(!showBigImage)}
            />


            <div className={classes.imagesBox}>

                <CameraUpload func={handleOnChange} />

                {images.map(({ link }, index) => (
                    <UploadImage
                        link={link}
                        zoomFunc={() => zoomImage(link)}
                        deleteFunc={() => handleDeleteImage(index)}
                    />
                ))}
            </div>


            <LinearProgressWithLabel value={percent} />

            {error && <Alert className="UploadStep__alertError" severity="error">
                Vui lòng thêm ảnh!
            </Alert>}


            <AlertInfor step="UploadStep" />

            <NextStepButton url={url} checkError={checkError} />

        </Container>
    )

}

export default UploadStep