const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')
// const { dispatch } = require('../../app/store')
initialState = {
    loading: false , 
    users: [],
    error: ''
}
// create asyn thunk 
// it will accept two arguamnet 
// 11.action name
// is a callback fun to create a payload
// creataAsyncThunk will Generates pending , fulfiled and rejected action types.
 const fetchUsers = createAsyncThunk('user/fetchUsers' , ()=>{
    // console.log('EHE')
    return axios.get('https://jsonplaceholder.typicode.com/users').then(resposne =>
         resposne.data.map(us => us.id))
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
            state.loading = false
            state.users = []
            state.error = action.payload
          });
        },

})


module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers