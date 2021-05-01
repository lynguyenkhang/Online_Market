import {
    Container, LinearProgress,
    Typography
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import InputText from '../../../../../../components/pages/BuyProduct/InputText';
import SelectNative from '../../../../../../components/pages/BuyProduct/SelectNative';
import StepsBar from '../../../../../../components/pages/BuyProduct/StepsBar';
import Warning from '../../../../../../components/Warning';
import { triggerCities, triggerDistricts } from '../../../../../../tools/triggerCities';
import { updateAddress } from '../../../../MarketSlice';
import NextStepButton from '../../NextStepButton/NextStepButton';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 20,
    },
}));


function AddressStep({ url, stepsPercent }) {
    const classes = useStyles()

    const cities = triggerCities()
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])


    const [chosenCity, setChosenCity] = useState("Hồ Chí Minh")
    const [chosenDistrict, setChosenDistrict] = useState("")
    const [chosenWard, setChosenWard] = useState("")

    const [street, setStreet] = useState("")
    const [error, setError] = useState(false)



    const dispatch = useDispatch()

    const handleCity = e => {
        if (e.target.value !== null) setChosenCity(e.target.value)
    }

    const handleDistrict = e => {
        if (e.target.value !== null) setChosenDistrict(e.target.value)
    }

    const handleWard = e => {
        if (e.target.value !== null) setChosenWard(e.target.value)
    }

    const handleStreet = e => {
        if (e.target.value !== null) setStreet(e.target.value)
    }


    const updateDistricts = () => {
        const data = triggerDistricts(chosenCity)
        setDistricts(data)
        setWards([])
        setChosenDistrict("")
        setChosenWard("")
    }

    const updateWards = () => {
        const index = districts.findIndex(({ Name }) => Name === chosenDistrict)
        if (index > -1) setWards(districts[index].Wards)
    }


    useEffect(() => {
        updateDistricts()
    }, [chosenCity])

    useEffect(() => {
        updateWards()
    }, [chosenDistrict])



    const checkError = () => {
        const emptyDistrict = chosenDistrict.length === 0
        const emptyWard = chosenWard.length === 0
        const emptyStreet = street.length === 0
        if (emptyDistrict || emptyWard || emptyStreet) {
            setError(true)
            return true
        }
        else {

            dispatch(updateAddress({
                city: chosenCity,
                district: chosenDistrict,
                ward: chosenWard,
                street: street,
            }))

            return false
        }
    }

    return (
        <Container className={classes.container}>
            <Typography gutterBottom variant="h6" align="center">
                Đăng tin
            </Typography>


            <StepsBar percent={stepsPercent} />



            <SelectNative
                label="Chọn tỉnh thành:"
                value={chosenCity}
                func={handleCity}
                data={cities}
            />

            <SelectNative
                label="Chọn quận, huyện:"
                value={chosenDistrict}
                func={handleDistrict}
                data={[{ Name: "" }, ...districts]}
                objectArr={true}
            />

            <SelectNative
                label="Chọn phường, xã, thị trấn:"
                value={chosenWard}
                func={handleWard}
                data={[{ Name: "" }, ...wards]}
                objectArr={true}
            />

            <InputText
                func={handleStreet}
                value={street}
                label="Điền số nhà, tên đường:"
            />

            <Warning condition={error} content="Vui lòng nhập đầy đủ thông tin" />

            <NextStepButton url={url} checkError={checkError} />

        </Container>
    )
}

export default AddressStep
