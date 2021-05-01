import {
    Button,
    Grid,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import categories from '../../../../assets/data/categories';
import allCategoryLogo from '../../../../assets/images/allProduct.png';
import Layout from '../../../../components/Layout';
import Loading from '../../../../components/Loading';
import BotNavigation from '../../../../components/Navigation/BotNavigation';
import TopNavigation from '../../../../components/Navigation/TopNavigation';
import Banners from '../../../../components/pages/Home/Banners';
import CategoryBox from '../../../../components/pages/Home/CategoryBox';
import { addDotsToPrice } from '../../../../tools/adjustPrice';
import DateDiff from '../../../../tools/dateDiff';
import { loadLikes } from '../../../User/UserSlice';
import { loadProducts } from '../../MarketSlice';
import ProductCard from './ProductCard';




const useStyles = makeStyles((theme) => ({
    root: { paddingBottom: 70 },
    gridProducts: {
        backgroundColor: "#fff",
        justifyContent: 'space-around',
        paddingBottom: '1rem',
        '& > .MuiTypography-root': {
            width: '100%',
            padding: '8px 16px 0px',
            [theme.breakpoints.up('sm')]: { padding: '8px 24px 0px !important' },
        },
    },
    gridProduct: {
        padding: '10px 0px',
        [theme.breakpoints.up('sm')]: { padding: '16px !important' },
        [theme.breakpoints.up('md')]: { padding: '24px !important' },
    },
    expandMore: {
        textTransform: 'none',
        margin: '1rem auto',
        backgroundColor: '#fff',
    },
}))




const PageHome = () => {

    const classes = useStyles()
    const dispatch = useDispatch()

    const productsList = useSelector(state => state.market.list)
    const search = useSelector(state => state.market.search)
    const { displayName, email } = useSelector(state => state.auth.user)


    const [list, setList] = useState([])
    const [category, setCategory] = useState('Tất cả')
    const [pagination, setPagination] = useState(1)
    const ProductsPerPagin = 6;


    const categoriesData = [{
        category: 'Tất cả', image: allCategoryLogo
    }, ...categories.map(({ category, image }) => ({ category, image }))]

    const handleChooseCategory = category => {
        setCategory(category)
    }

    const handleExpandMore = () => {
        setTimeout(() => setPagination(pagination + 1), 600)
    }

    useEffect(() => {
        dispatch(loadProducts())
        dispatch(loadLikes())
    }, [])

    useEffect(() => {
        let data = []
        if (category === "Tất cả") data = [...productsList]
        else {
            data = [...productsList.filter(product => product.category === category)]
        }

        if (search.length > 0) {
            data = [...data].filter(product => {
                return product.title.indexOf(search) > -1
            })
        }

        setList(data)
    }, [category, search])





    useEffect(() => {
        setList(productsList)
    }, [productsList])



    return (
        <div className={classes.root}>
            <TopNavigation userName={displayName} adminCondition={email === process.env.REACT_APP_ADMIN} />

            <Layout numberGrid={10} breakPoint="md" >
                <Banners />

                <CategoryBox data={categoriesData} changeCategory={handleChooseCategory} />


                <Grid className={classes.gridProducts} container>

                    <Typography variant="h6">Tin đăng mới</Typography>

                    {list.slice(0, pagination * ProductsPerPagin).map(product => {
                        const { id, author, price, images, title, time, address, describe } = product
                        const dotPrice = addDotsToPrice(`${price}`) + " đ"
                        const dateDiff = `${DateDiff(new Date(time), new Date())} trước`
                        return (
                            <Grid className={classes.gridProduct} item xs={11} sm={6} md={4} key={id}>
                                <ProductCard
                                    title={title}
                                    price={dotPrice}
                                    dateDiff={dateDiff}
                                    location={address.city}
                                    image={images[0]}
                                    describe={describe}
                                    userName={author.name}
                                    userAvatar={author.avatar}
                                    id={id}
                                />
                            </Grid>
                        )
                    })}
                </Grid>

                <Loading condition={productsList.length < 1} />

                {productsList.length > 0 && <Button
                    className={classes.expandMore}
                    onClick={handleExpandMore}
                    startIcon={<ExpandMoreIcon />}
                    variant="outlined"
                    size='large'
                    color="primary"
                    children='Xem thêm'
                />}
            </Layout>
            <BotNavigation page={0} adminCondition={email === process.env.REACT_APP_ADMIN}/>

        </div>
    )
}

export default PageHome
