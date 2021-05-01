import {
    Checkbox, Container,
    FormControlLabel,
    Typography
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GiftIcon from '../../../../../../assets/icons/giftBox.svg';
import InputText from '../../../../../../components/pages/BuyProduct/InputText';
import StepsBar from '../../../../../../components/pages/BuyProduct/StepsBar';
import Warning from '../../../../../../components/Warning';
import { addDotsToPrice, removeWord } from '../../../../../../tools/adjustPrice';
import { updatePrice } from '../../../../MarketSlice';
import AlertInfor from '../../AlertInfor/AlertInfor';
import NextStepButton from '../../NextStepButton/NextStepButton';


const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 20,
    },

    formControlLabel: {
        width: '100%',
        marginLeft: 0,
        '& .MuiFormControlLabel-label': { marginRight: 'auto', }
    },
    freeLabel: {
        display: 'flex',
        alignItems: 'center',
        '& img': { width: 28, marginRight: '1rem' },
        '& div': { paddingTop: 10 },
    },

}));

export default function PriceStep({ url, stepsPercent }) {
    const classes = useStyles()

    const [value, setValue] = useState('')
    const [free, setFree] = useState(false)
    const [error, setError] = useState(false)

    const dispatch = useDispatch()
    const price = useSelector(state => state.market.postedProduct.price)


    const handleGift = e => {
        setFree(!free)
    }


    const handleChangePrice = e => {
        let text = e.target.value
        text = removeWord(e.target.value, ".")
        if (!isNaN(text)) {
            setValue(addDotsToPrice(text))
            setFree(false)
        }
    }


    useEffect(() => {
        if (price > -1) setValue(addDotsToPrice(`${price}`))
    }, [])

    useEffect(() => {
        if (free) setValue("0")
    }, [free])

    const checkError = () => {
        if (value.length < 5 && free === false) {
            setError(true)
            return true
        } else {
            setError(false)
            const PriceStr = removeWord(value, ".")
            console.log(PriceStr)
            dispatch(updatePrice(parseInt(PriceStr)))
            return false
        }
    }


    return (

        <Container className={classes.container}>

            <Typography gutterBottom variant="h6" align="center">
                Giá
            </Typography>

        
            <StepsBar percent={stepsPercent} />


            <InputText
                func={handleChangePrice}
                value={value}
                label="Giá"
                endAdorment={true}
            />


            <Warning condition={error} content="Vui lòng nhập giá tiền phù hợp" />

            <AlertInfor step="PriceStep" />

            <NextStepButton url={url} checkError={checkError} />

            <FormControlLabel
                className={classes.formControlLabel}
                labelPlacement="start"
                control={<Checkbox checked={free} onChange={handleGift} name="freePrice" />}
                label={
                    <div className={classes.freeLabel}>
                        <img src={GiftIcon} />
                        <div>Tôi muốn tặng miễn phí</div>
                    </div>
                }
            />
        </Container>
    )
}
