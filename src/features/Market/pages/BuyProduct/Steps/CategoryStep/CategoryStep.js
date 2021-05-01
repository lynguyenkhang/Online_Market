import { Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import categories from '../../../../../../assets/data/categories';
import StepsBar from '../../../../../../components/pages/BuyProduct/StepsBar';
import Warning from '../../../../../../components/Warning';
import { updateCategory } from '../../../../MarketSlice';
import NextStepButton from '../../NextStepButton/NextStepButton';




const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 20,
        backgroundColor: '#fff',
    },
    alert: {
        marginTop: 20,
        border: '1px solid rgba(97,26,21,.1)',
    },
    button: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        padding: '0.725rem 21px',
        fontSize: '1rem',
        textTransform: 'none',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        backgroundColor: '#fff',
        borderBottom: 0,
        borderRadius: 0,
        fontWeight: '400',
        '& img': { width: 20, marginRight: 16, },
        '&:last-child': {
            borderBottom: '1px solid rgba(0, 0, 0, 0.23)'
        }
    },
    typography: {
        marginBottom: '0.3rem',
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '1rem',
        lineHeight: 1.75,
        letterSpacing: '0.00938em',
    }
}));




function CategoryStep({ url, stepsPercent }) {
    const classes = useStyles()
    const [choose, setChoose] = useState({})
    const [error, setError] = useState(false)

    const dispatch = useDispatch()
    const category = useSelector(state => state.market.postedProduct.category)

    const handleChoose = item => {
        setError(false)
        setTimeout(() => setChoose(item), 500)
    }


    const checkError = () => {
        if (choose.category === undefined) {
            setError(true)
            return true
        } else {
            setError(false)
            dispatch(updateCategory(choose))
            return false
        }
    }

    useEffect(() => {
        if (category.category !== undefined) setChoose(category)
}, [])

    return (
        <Container className={classes.container}>

            <Typography gutterBottom variant="h6" align="center">
                Đăng tin
            </Typography>

            <StepsBar percent={stepsPercent}/>


            <Warning condition={error} content="Vui lòng chọn danh mục" />


            {choose.category !== undefined &&
                <div style={{ marginTop: 20 }}>
                    <Typography className={classes.typography}>
                        Đã chọn
                    </Typography>

                    <Button className={classes.button} >
                        <img src={choose.icon} alt="chosen category"/>
                        {choose.category}
                    </Button>
                </div>
            }


            <div style={{ marginTop: 20 }}>
                <Typography className={classes.typography}>
                    Lựa chọn khác:
                </Typography>

                {categories.map(item => {
                    if (item.category !== choose.category) return (
                        <Button className={classes.button}
                            onClick={() => handleChoose(item)}
                        >
                            <img src={item.icon} alt={item.category}/>
                            {item.category}
                        </Button>
                )})}
            </div>

            <NextStepButton url={url} checkError={checkError} />
        </Container>
    )
}

export default CategoryStep
