import { Avatar, Button, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../../assets/images/logo_rectangle.png';
import InputText from '../../../components/pages/BuyProduct/InputText';
import Warning from '../../../components/Warning';
import auth from '../../../firebase/auth';
import { addJoinDate, addPhoneNumber, changeAvatar, changeDisplayName } from '../AuthSlice';



const useStyles = makeStyles((theme) => ({
    background: {
        position: 'fixed',
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        // filter: 'blur(8px)',
        backgroundColor: '#fbc83e',
    },
    logoBox: {
        backgroundColor: '#025597',
        padding: '.5rem 0',
        '& > img':{
            maxWidth: 150,
            margin: '0 auto',
            display: 'block',
        }
    },
    formBox: {
        padding: '1rem',
        width: 280,
        height: 'calc(100vh - 80px - 7.5rem)',
        margin: '2.5rem auto',
        background: 'white',
        // background: `linear-gradient(to right bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.1))`,
        borderRadius: 5,
    },
    AvatarBox: {
        margin: '1.5rem 0px 0.5rem 0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',

        '& .MuiAvatar-root': {
            width: 100,
            height: 100,
            backgroundColor: '1px solid #888'
        },
        '& > label': {
            position: 'absolute',
            right: 'calc(50% - 70px)',
            borderRadius: '50%',
            backgroundColor: '#eee',
            '& .MuiSvgIcon-root': {
                width: '1rem',
                height: '1rem',
            }
        }
    },
    BtnBox: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '1rem',
    }
  }))
  

function WelcomeNewUser() {
    const classes = useStyles()
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const [ phoneNumber, setPhoneNumber ] = useState('')
    const [ newName, setNewName ] = useState(user.displayName)
    const [ error, setError ] = useState(false)

    const handlePhoneNumber = e => {
        const value = e.target.value
        if(!isNaN(value)){
            setPhoneNumber(value)
        }
    }

    const handleChangeName = e => {
        setNewName(e.target.value)
    }

    const handleSave = () => {
        const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if(vnf_regex.test(phoneNumber) && newName.length > 0){
            setError(false)
            const date = new Date
            const dateStr = date.toLocaleDateString()

            dispatch(addJoinDate(dateStr))
            dispatch(addPhoneNumber(phoneNumber))
            dispatch(changeDisplayName(newName))

        } else {
            setError(true)
        }
    }

    const handleChangeAvatar = e => {
        const file = e.target.files[0]
        if(file !== undefined){
            dispatch(changeAvatar(file))
        }
    }
     
    return (
    <div>
        <div className={classes.background}></div>
        <div className={classes.logoBox}>
            <img src={logo} />
        </div>

        <div className={classes.formBox}>
                <Typography variant="h6" align="center">
                    Chào mừng bạn đến
                </Typography>
                <Typography variant="h6" align="center">
                    UEH Market
                </Typography>

                <div className={classes.AvatarBox}>
                    <Avatar src={user.photoURL}/>
                    <label htmlFor="icon-button-file">
                        <IconButton aria-label="upload picture" component="span">
                            <CameraAltIcon />
                        </IconButton>
                    </label>
                    <input
                            accept="image/*"
                            id="icon-button-file"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={handleChangeAvatar}
                        />
                </div>


                <InputText 
                    func={handleChangeName}
                    styleForm={{ marginTop: '10px' }}
                    value={newName}
                    label="Họ và tên"
                />

                <InputText
                    styleForm={{ marginTop: '10px' }}
                    value={user.email}
                    label="Email"
                    disabled
                />


                <InputText
                    func={handlePhoneNumber}
                    value={phoneNumber}
                    label="Nhập số điện thoại"
                />

                <div className={classes.BtnBox}>
                    <Button style={{marginRight: '1rem'}} color="primary" variant="contained" onClick={handleSave}>
                        Tiếp tục
                    </Button>

                    <Button variant="contained" onClick={() => auth.signOut()}>
                        Thoát
                    </Button>
                </div>


                <Warning condition={error} content="Điền thông tin không hợp lệ"/>
        </div>
    </div>





    )
}
 
export default WelcomeNewUser
