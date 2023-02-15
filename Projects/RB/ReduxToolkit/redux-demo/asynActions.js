// 
const axios = require('axios');
const redux = require('redux');
const thunkMiddleWare = require('redux-thunk').default
const applyMiddleware = redux.applyMiddleware

// const redux = require('redux')
const createStore = redux.createStore
initialstate = {
    loading : false,
    users: [],
    error: ''
}

const FUS = 'FUS'
const FUL = 'FUL'
const FUE ='FUE'


const ful = ()=>{
    return {
        type: FUL
    }
}

function fus(users){
    return {
        type: FUS,
        payload: users 
    }
}

const fue = (error)=>{
    return {
        type: FUE,
        payload: error
    }
}


const reducer = (state = initialstate , action)=> {
  switch (action.type){
    case FUL:
         return{ ...state ,  loading: true}
    case FUS:
            return{ ...state ,  loading: false , error: '' , users: action.payload}
    case FUE:
         return{ ...state ,   loading: false , users: [] , error: action.payload}   
    default:
        return state      
  }
}

// asyn action creator
// is ablity to return fun 
// The fun is not pure.It's allowed to have side effects such as async api calls.


const fetchUser = ()=> {
     return function(dispatch) {
        dispatch(ful())
       axios.get('https://jsonplaceholder.typicode.com/users').then((res) =>{
        const users = res.data.map((user)=> user.id)
         dispatch(fus(users))
       }).catch((e) =>{ 
        dispatch(fue(e.message))
       })
     }   
}



const store = createStore(reducer , applyMiddleware(thunkMiddleWare))
store.subscribe(()=>{
console.log('update' , store.getState())
})
store.dispatch(fetchUser())

