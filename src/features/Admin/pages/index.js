import React, { useEffect, useState } from 'react'
import TopNavigation from '../../../components/Navigation/TopNavigation'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../../components/Layout';
import BotNavigation from '../../../components/Navigation/BotNavigation';
import { loadAllUncheckedProducts } from '../AdminSlice';
import changeDateFormat from '../../../tools/changeDateFormat';
import Table from '../../../components/pages/Admin/Table'
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    btnGroup: {
        margin: '1.25rem 0px',
        width: '100%',
    },
    note: {
        marginBottom: '0.5rem',
        fontStyle: 'italic',
    }
}))




export default function AdminPage() {
    const classes = useStyles();

    const { displayName, email } = useSelector(state => state.auth.user)
    const { uncheckedList } = useSelector(state => state.admin)
    const { list } = useSelector(state => state.market)
    const [ uncheckedArr, setUncheckedArr ] = useState([])
    const [ checkedArr, setCheckArr ] = useState([])
    const [ typeArr, setTypeArr ] = useState("checked")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadAllUncheckedProducts())
    },[])

    const filterFields = arr => {
        const data = arr.map(({id, title, author, time, price}) => {
            const authorName = author.name

            let date = new Date(time)
            date = changeDateFormat(date.toLocaleDateString())

            return {
                id,
                "name": title,
                "author": authorName,
                "date": date,
            }
        })
        return data

    }

    useEffect(() => {
        setUncheckedArr(filterFields(uncheckedList))
        setCheckArr(filterFields(list))
    },[uncheckedList])

    


    return (
        <div>
            <TopNavigation userName={displayName} adminCondition={email === process.env.REACT_APP_ADMIN}/>

            <Layout numberGrid={10} breakPoint="md">


                <ButtonGroup className={classes.btnGroup}>
                    <Button
                        color="primary"
                        variant={ typeArr === "checked" ? "contained" : "outlined"}
                        onClick={() => setTypeArr("checked")}
                        children="Đã duyệt"
                    />

                    <Button
                        color="primary"
                        variant={ typeArr === "unchecked" ? "contained" : "outlined"}
                        onClick={() => setTypeArr("unchecked")}
                        children="Chưa duyệt"
                    />
                </ButtonGroup>



                <Typography className={classes.note} variant="subtitle2">
                    Bấm vào mỗi hàng để xem chi tiết sản phẩm
                </Typography>




                {typeArr === "checked" && <Table rows={checkedArr}/>}
                {typeArr === "unchecked" && <Table rows={uncheckedArr}/>}



            </Layout>

            <BotNavigation page={0} />

        </div>
    )
}
