// const configureStore = require('@reduxjs/toolkit').configureStore
// const reduxLogger = require('redux-logger') 
// const cakeReducer = require('../features/cake/cakeSlice')
// const iceCreamReducer = require('../features/iceCream/iceCreamSlice')
// const userReducer = require('../features/user/userSlice')
import {configureStore} from '@reduxjs/toolkit'
// import {cakeReducer} from '../features/cake/cakeSlice'
// import {iceCreamReducer} from '../features/iceCream/iceCreamSlice'
// import { userReducer } from '../features/user/userSlice'
// import {cakeReducer} from '../features/cake/cakeSlice'
// import {userReducer} from '../features/user/userSlice'

import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/iceCream/iceCreamSlice'
import userReducer from '../features/user/userSlice'


// use logge
// const logger = reduxLogger.createLogger() 

const store = configureStore ({
    reducer:  {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    //  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger)
})

// module.exports  store

export default store
// export const {store} =  stores

// export const {store} = store
