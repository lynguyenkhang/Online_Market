import Alert from '@material-ui/lab/Alert';
import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    alert: {
        marginTop: '1rem',
        border: '1px solid rgb(204 233 255)',
        '& ul': {marginTop: 0,}
    }
}))


function AlertInfor({step}) {
    const classes = useStyles()
    const category = useSelector(state => state.market.postedProduct.category)
    const content = category[step]

    const shouldName = step === "UploadStep" ? "Để bán nhanh hơn" : "Viết tiếng Việt có dấu:"

    const addExample = step === "TitleStep"
    const addAvoid = !(step === "DescribeStep")

    if(step !== 'PriceStep')
        return (
            <Alert className={classes.alert} color="info" icon={false}>
                {addExample && <div>
                    <Typography variant="subtitle1">Ví dụ</Typography>
                    <ul>
                        {content.example.map((text, index) => 
                        <li key={index}>
                            <Typography variant="body2">{text}</Typography>
                        </li>)}
                    </ul>
                </div>}


                <div>
                    <Typography variant="subtitle1">{shouldName}</Typography>
                    <ul>
                        {content.should.map((text, index) => 
                        <li key={index}>
                            <Typography variant="body2">{text}</Typography>
                        </li>)}
                    </ul>
                </div>

                { addAvoid && <div>
                    <Typography variant="subtitle1">Không nên</Typography>
                    <ul>
                        {content.avoid.map((text, index) => 
                        <li key={index}>
                            <Typography variant="body2">{text}</Typography>
                        </li>)}
                    </ul>
                    
                </div>}
            </Alert>
        )
    else return (
        <Alert  className={classes.alert} color="info" icon={false}>

            <Typography
                style={{fontWeight: 'bold'}}
                variant="subtitle1"
                children="Không nên:"/>
            <ul>
                <li>
                    <Typography>Đếm đầy đủ các số 0</Typography></li>
                <li>
                    <Typography>Ví dụ: 3.500.000 đ (3 triệu rưỡi) thay vì 3.500</Typography></li>
                <li>
                    <Typography>Cân nhắc về điều kiện bảo hành, phụ kiện đi kèm, mức độ sửa chữa, ngoại hình máy khi đặt giá bán</Typography></li>
            </ul>
    
        </Alert>
    )
}


export default AlertInfor
