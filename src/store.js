import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { bannerReducer, featuredProducts, trendingProducts, latestProducts } from "./reducer/HomeReducer"
import {
     loginUserReducer, 
    registrationUserRducer, 
    forgetPasswordReducer, 
    updatePasswordReducer ,
} from "./reducer/AuthReducer"

const reducer = combineReducers({
    banners: bannerReducer,
    featured: featuredProducts,
    latest: latestProducts,
    trending: trendingProducts,
    userLogin: loginUserReducer,
    userRegistration: registrationUserRducer,
    forgetPassword: forgetPasswordReducer,
    updatePassword: updatePasswordReducer

})

const initialState = {};

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;