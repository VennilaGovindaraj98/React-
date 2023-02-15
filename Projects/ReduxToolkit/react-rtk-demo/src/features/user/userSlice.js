// const createSlice = require('@reduxjs/toolkit').createSlice
// const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
import {createSlice  ,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
// const axios = require('axios')
// const { dispatch } = require('../../app/store')
const initialState = {
    loading: false , 
    users: [],
    error: ''
}
// create asyn thunk 
// it will accept two arguamnet 
// 11.action name
// is a callback fun to create a payload
    // it's a asyn function which return promises
// creataAsyncThunk will Generates pending , fulfiled and rejected action types.
 export const fetchUsers = createAsyncThunk('user/fetchUsers' , ()=>{
    // console.log('EHE')
    return axios.get('https://jsonplaceholder.tpicode.com/users').then(resposne =>
         resposne.data)
 } )
 
const userSlice = createSlice({
    name: 'user', 
    initialState,
    extraReducers: (builder) => {
        //   console.log(cakeActions.ordered);
          builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
          });
          builder.addCase(fetchUsers.fulfilled, (state , action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
          });
          builder.addCase(fetchUsers.rejected, (state , action ) => {
            // console.log('eheheheh' ,action.error.message)
            state.loading = false
            state.users = []
            state.error = action.error.message
          });
        },

})


export default userSlice.reducer
// module.exports.fetchUsers = fetchUsers