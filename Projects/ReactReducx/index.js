// import redux from 'redux'
const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore =redux.createStore
const combineReducers = redux.combineReducers
const applyMiddeware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

// console.log('eheheheh')

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"


// action 
function buyCake(){
 return {
    type: BUY_CAKE,
    info: 'First redux action'   
  }
}


function buyIceCream(){
    return {
       type: BUY_ICECREAM,
       info: 'First redux action'   
     }
   }

// reducer 



const initialState = {
    numberOfCake: 10 ,
    numberOfIceCream: 10
} 

const initialCakeState = {
    numberOfCake: 10
}

const initialIceCreamState = {
    numberOfIceCream: 10
}


const cakeReducer = ((state = initialCakeState , action)=>{
    // console.log(action.type , state.numberOfCake)
  switch(action.type){
    case BUY_CAKE:
     return  { 
        ...state,
        numberOfCake: state.numberOfCake - 1

     }
    //  case BUY_ICECREAM:
    //  return  { 
    //     ...state,
    //     numberOfIceCream: state.numberOfIceCream - 1

    //  }
     default: return state   
  }
   

})

const iceCreamReducer = ((state = initialIceCreamState , action)=>{
    // console.log(action.type , state.numberOfCake)
  switch(action.type){
    // case BUY_CAKE:
    //  return  { 
    //     ...state,
    //     numberOfCake: state.numberOfCake - 1

    //  }
     case BUY_ICECREAM:
     return  { 
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1

     }
     default: return state   
  }
   

})

const rootReducer = combineReducers({
    cakeReducer: cakeReducer , 
    iceCreamReducer: iceCreamReducer, 
})

const store =  createStore(rootReducer , applyMiddeware(logger))
// console.log( 'initial staet' , store.getState())
// console.log('before')
const unsub = store.subscribe(()=> {})
// console.log('afte')
// console.log(store.getState())
// const text = buyCake()
// console.log( 'textx' ,  text)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
// console.log(store.getState())
unsub()






