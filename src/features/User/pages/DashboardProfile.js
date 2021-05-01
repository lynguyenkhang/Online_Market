import { Avatar, Button, Container, Divider, Grid, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import SaveIcon from '@material-ui/icons/Save';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Layout from '../../../components/Layout';
import BotNavigation from '../../../components/Navigation/BotNavigation';
import TopNavigation from '../../../components/Navigation/TopNavigation';
import Overlay from '../../../components/Overlay';
import InputText from '../../../components/pages/BuyProduct/InputText';
import ZoomImage from '../../../components/pages/BuyProduct/ZoomImage';
import Warning from '../../../components/Warning';
import checkPhoneNumber from '../../../tools/checkPhoneNumber';
import { changeAvatar, changeDisplayName, changePhoneNumber } from '../../Auth/AuthSlice';

const useStyles = makeStyles(theme => ({
    title: {
        pading: '0.75rem 0px',
        marginTop: 5,
    },
    avatar: {
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        padding: '2rem',
        position: 'relative',
        '& .MuiAvatar-root': {
            width: 130,
            height: 130,
            backgroundColor: '1px solid #888'
        },
        '& .MuiIconButton-root': {
            position: 'absolute',
            top: '130px',
            right: 'calc(50% - 70px)',
            backgroundColor: '#fff',
            '& .MuiSvgIcon-root': {
                width: '2rem',
                height: '2rem',
            }
        }
    },
    saveButton: {
        marginTop: '0.5rem',
        marginLeft: 'auto',
        display: 'flex',
    }
}))


function DashboardProfile() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const { photoURL, displayName, email, joinDate, phoneNumber } = useSelector(state => state.auth.user)
    const [showBigImage, setShowBigImage] = useState(false)
    const [bigImage, setBigImage] = useState("")

    const [newName, setNewName] = useState(displayName)
    const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber)

    const [error, setError] = useState(false)


    const handleChangeName = e => {
        setNewName(e.target.value)
    }

    const handleChangePhoneNumber = e => {
        const value = e.target.value
        if (!isNaN(value)) {
            setNewPhoneNumber(e.target.value)
        }
    }

    const handleChangeAvatar = e => {
        const file = e.target.files[0]
        if(file !== undefined){
            dispatch(changeAvatar(file))
        }
    }

    const closeOverlay = () => {
        setShowBigImage(!showBigImage)
    }

    const zoomImage = linkImage => {
        setBigImage(linkImage)
        setShowBigImage(true)
    }


    const handleSave = () => {
        const condition1 = newName.length > 0
        const condition2 = checkPhoneNumber(newPhoneNumber)
        if (condition1 && condition2) {
            setError(false)

            if(newPhoneNumber !== phoneNumber){
                dispatch(changePhoneNumber(newPhoneNumber))
            }
            if (newName !== displayName) {
                dispatch(changeDisplayName(newName))
            }
            
            setTimeout(() => { history.push('/user') }, 500)
        } else setError(true)
    }


    return (
        <div>
            <TopNavigation userName={displayName} adminCondition={email === process.env.REACT_APP_ADMIN} />
            <Layout numberGrid={10} breakPoint="md">

                <Overlay condition={showBigImage} func={closeOverlay} />

                <ZoomImage
                    condition={showBigImage}
                    image={bigImage}
                    func={() => setShowBigImage(!showBigImage)}
                />

                <Grid xs={12} className={classes.title}>
                    <Container>
                        <Warning condition={error} content="Nội dung không hợp lệ" />
                        <Typography variant="h6">Thông tin cá nhân</Typography>
                        <Divider />
                    </Container>
                </Grid>

                <Grid item xs={12} sm={3} className={classes.avatar}>
                    <Avatar src={photoURL} onClick={() => zoomImage(photoURL)} />

                    <input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleChangeAvatar}
                    />
                    <label htmlFor="icon-button-file">
                        <IconButton aria-label="upload picture" component="span">
                            <CameraAltIcon />
                        </IconButton>
                    </label>
                </Grid>


                <Grid item xs={12} sm={9}>
                    <Container>
                        <InputText 
                            func={handleChangeName}
                            styleForm={{ marginTop: '10px' }}
                            value={newName}
                            label="Họ và tên"
                        />

                        <InputText
                            func={handleChangePhoneNumber}
                            styleForm={{ marginTop: '10px' }}
                            value={newPhoneNumber}
                            label="Số điện thoại"
                        />



                        <InputText
                            styleForm={{ marginTop: '10px' }}
                            value={email}
                            label="Email"
                            disabled
                        />

                        <InputText
                            styleForm={{ marginTop: '10px' }}
                            value={joinDate}
                            label="Ngày tham gia"
                            disabled
                        />


                        <Button
                            className={classes.saveButton}
                            variant="contained"
                            color="primary"
                            startIcon={<SaveIcon />}
                            children="Lưu"
                            onClick={handleSave}
                        />



                    </Container>
                </Grid>

            </Layout>
            <BotNavigation page={2} adminCondition={email === process.env.REACT_APP_ADMIN}/>

        </div>
    )
}

export default DashboardProfile
