import {
    Container,
    Typography
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputText from '../../../../../../components/pages/BuyProduct/InputText';
import StepsBar from '../../../../../../components/pages/BuyProduct/StepsBar';
import Warning from '../../../../../../components/Warning';
import { updateTitle } from '../../../../MarketSlice';
import AlertInfor from '../../AlertInfor/AlertInfor';
import NextStepButton from '../../NextStepButton/NextStepButton';



const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 20,
    },
}));




export default function TitleStep({ url, stepsPercent }) {
    const classes = useStyles()
    const [value, setValue] = useState('')
    const [error, setError] = useState(false)

    const dispatch = useDispatch()
    const title = useSelector(state => state.market.postedProduct.title)

    const handleChange = e => {
        const text = e.target.value

        if (text.length <= 50)
            setValue(e.target.value)
    }

    const checkError = () => {
        if (value.length < 1) {
            setError(true)
            return true
        } else {
            setError(false)
            dispatch(updateTitle(value))
            return false
        }
    }

    useEffect(() => {
        if (title.length > 0) setValue(title)
    }, [])

    return (
        <Container className={classes.container}>

            <Typography gutterBottom variant="h6" align="center">
                Tiêu đề
            </Typography>

            <StepsBar percent={stepsPercent} />


            <InputText
                func={handleChange}
                value={value}
                label="Tiêu đề"
            />

            <Typography gutterBottom variant="subtitle2" align="right">
                {`${value.length}/50`}
            </Typography>

            <Warning condition={error} content="Vui lòng nhập tiêu đề" />

            <AlertInfor step="TitleStep" />

            <NextStepButton url={url} checkError={checkError} />

        </Container>
    )
}
