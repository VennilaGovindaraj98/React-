// const { cakeActions } = require('../cake/cakeSlice')

import {createSlice } from '@reduxjs/toolkit'
import { ordered as CakeOrdered } from '../cake/cakeSlice'


// const createSlice = require('@reduxjs/toolkit').createSlice
const initialState = {
    numOfIceCream: 20
}

const iceCreamSlice =  createSlice({
    name: 'iceCreamcheck',
    initialState, 
    reducers: {
        ordered: (state) =>{
            state.numOfIceCream -- 
        },
        restocked: (state , action) => {
           state.numOfIceCream += action.payload
        },
        //
        
    },
    // extraReducers: {
    //         ['cake/ordered']: (state) =>{
    //             state.numOfIceCream -- 
    //         }
    //     }
    extraReducers: (builder) => {
    //   console.log(cakeActions.ordered);
      builder.addCase(CakeOrdered, (state) => {
        state.numOfIceCream -- 
      });
    },



})

export default iceCreamSlice.reducer
export const {ordered , restocked}  = iceCreamSlice.actions
// module.exports.iceCreamActions = iceCreamSlice.actions
