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
import { updateDescribe } from '../../../../MarketSlice';
import AlertInfor from '../../AlertInfor/AlertInfor';
import NextStepButton from '../../NextStepButton/NextStepButton';


const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 20,
    },
}));


export default function DescribeStep({ url, stepsPercent }) {
    const classes = useStyles()

    const [value, setValue] = useState('')
    const [error, setError] = useState(false)

    const dispatch = useDispatch()
    const describe = useSelector(state => state.market.postedProduct.describe)


    const handleChange = e => {
        const text = e.target.value

        if (text.length <= 1500)
            setValue(e.target.value)
    }

    const checkError = () => {
        if (value.length < 1) {
            setError(true)
            return true
        } else {
            setError(false)
            dispatch(updateDescribe(value))
            return false
        }
    }
    
    useEffect(() => {
        if(describe.length > 0) setValue(describe)
    }, [])

    return (

        <Container className={classes.container}>


            <Typography gutterBottom variant="h6" align="center">
                Mô tả
            </Typography>

            <StepsBar percent={stepsPercent} />


            <InputText
                func={handleChange}
                multiline={true}
                value={value}
                label="Mô tả chi tiết sản phẩm"
            />


            <Typography gutterBottom variant="subtitle2" align="right">
                {`${value.length}/1500`}
            </Typography>

            <Warning condition={error} content="Vui lòng nhập mô tả bài đăng" />

            <AlertInfor step="DescribeStep" />


            <NextStepButton url={url} checkError={checkError} />

        </Container>
    )
}
