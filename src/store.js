import {combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './features/Auth/AuthSlice'
import AuthMiddleware from './features/Auth/middlewares/index'
import MarketMiddlewares from './features/Market/middlewares'
import MarketSlice from './features/Market/MarketSlice'
import UserSlice from './features/User/UserSlice'
import UserMiddleware from './features/User/middlewares/index'
import ProductSlice from './features/Product/ProductSlice'
import ProductMiddleware from './features/Product/middlewares'
import AdminSlice from './features/Admin/AdminSlice'
import AdminMiddlewares from './features/Admin/middlewares'


const rootReducer = combineReducers({
    auth: AuthSlice,
    market: MarketSlice,
    user: UserSlice,
    product: ProductSlice,
    admin: AdminSlice,
})

export default configureStore({
    reducer: rootReducer,
    middleware: [AuthMiddleware, MarketMiddlewares, UserMiddleware, ProductMiddleware, AdminMiddlewares]
})