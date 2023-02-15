const createSlice = require('@reduxjs/toolkit').createSlice
initialState = {
    numOfCake: 10 
}

// this fuc accept three arg 
//  1.we can specify the name , 2.we can specify the initialstate , 3.We can specify the reducers functions

const cakecSlice = createSlice({
    name: 'cake' , 
    initialState,
    reducers: {
     ordered: (state) =>{
        state.numOfCake -- 
     },
     restocked: (state , action) =>{
        state.numOfCake += action.payload
     },

    //  extraReducers: (builder) => {
    //     // Add reducers for additional action types here, and handle loading state as needed
    //     'reports/fetchReports/fulfilled': () => {
    //         console.log('asdf');
    //    }
    //     builder.addCase(iceCreamcheck.ordered, (state, action) => {
    //         console.log('eheheh')
    //         console.log(state)
    //       // Add user to the state array
    //     //   state.entities.push(action.payload)
    //     })

        
    //   },
      
    }
})

// modulr.exports = cakecSlice.reducer
// removed - define action type const , action type obj , action type creators , the wsitch stageement , handling immutable updates in the reducer
module.exports = cakecSlice.reducer
module.exports.cakeActions = cakecSlice.actions




