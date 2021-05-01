import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { createNewPostedProduct, emptyPostedProducts } from '../../MarketSlice'
import './index.css'
import AddressStep from './Steps/AddressStep/AddressStep'
import CategoryStep from './Steps/CategoryStep/CategoryStep'
import DescribeStep from './Steps/DescribeStep/DescribeStep'
import PreviewStep from './Steps/PreviewStep/PreviewStep'
import PriceStep from './Steps/PriceStep/PriceStep'
import TitleStep from './Steps/TitleStep/TitleStep'
import UploadStep from './Steps/UploadStep/UploadStep'
import TopNavigation from '../../../../components/Navigation/TopNavigation'
import Layout from '../../../../components/Layout'

function PageBuyProduct() {

    const { id } = useSelector(state => state.market.postedProduct)
    const dispatch = useDispatch();
    const { url } = useRouteMatch()


    const pages = {
        step1: { current: url, next: `${url}/step2` },
        step2: { current: `${url}/step2`, next: `${url}/step3` },
        step3: { current: `${url}/step3`, next: `${url}/step4` },
        step4: { current: `${url}/step4`, next: `${url}/step5` },
        step5: { current: `${url}/step5`, next: `${url}/step6`},
        step6: { current: `${url}/step6`, next: `${url}/step7`},
        step7: { current: `${url}/step7`}
    }

    const steps = Object.keys(pages).length

    const styleLayout = {
        backgroundColor: '#fff',
        paddingBottom: 80,
        height: 'calc(100vh - 100px)',
        overflowY: 'scroll',
    }

    useEffect(() => {
        if (id.length === 0) dispatch(createNewPostedProduct())
        return () => dispatch(emptyPostedProducts())
    }, [])

    


    return (
        <div className="BuyProduct">
            <TopNavigation />
            <Layout
                styles={styleLayout}
                numberGrid={10}
                breakPoint="md" >

                <Switch>

                    <Route exact path={pages.step1.current}>
                        <CategoryStep
                            url={pages.step1.next}
                            stepsPercent={Math.floor((1 / steps) * 100)} />
                    </Route>

                    <Route exact path={pages.step2.current}>
                        <AddressStep
                            url={pages.step2.next}
                            stepsPercent={Math.floor((2 / steps) * 100)} />
                    </Route>

                    <Route exact path={pages.step3.current}>
                        <TitleStep
                            url={pages.step3.next}
                            stepsPercent={Math.floor((3 / steps) * 100)} />
                    </Route>

                    <Route exact path={pages.step4.current}>
                        <DescribeStep
                            url={pages.step4.next}
                            stepsPercent={Math.floor((4 / steps) * 100)} />
                    </Route>

                    <Route exact path={pages.step5.current}>
                        <PriceStep
                            url={pages.step5.next}
                            stepsPercent={Math.floor((5 / steps) * 100)} />
                    </Route>


                    <Route exact path={pages.step6.current}>
                        <UploadStep
                            url={pages.step6.next}
                            stepsPercent={Math.floor((6 / steps) * 100)} />
                    </Route>

                    <Route exact path={pages.step7.current}>
                        <PreviewStep
                            stepsPercent={Math.floor((7 / steps) * 100)} />
                    </Route>


                </Switch>

            </Layout>

        </div>
    )
}

export default PageBuyProduct


