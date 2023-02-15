console.log('node index')

// create store
// import redux from 'redux
const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const bindActionCreators = redux.bindActionCreators
const reduxLogger = require('redux-logger')
const  logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware




// CREATE  A ACTION type
// S1 -  We defined the action type  - Action type des the event that happend

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCK = 'CAKE_RESTOCK'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCK = 'ICECREAM_RESTOCK'


// Create a action
// {
//     type: CAKE_ORDERED,
//     quantity: 1 
// }

// Action creator is a func that returns an action.
// s2 Use the action type to create the action creator.
 function CakeOrder(){
    console.log('Action creaye')

    return {
        type: CAKE_ORDERED,
        payload: 1 
    }
 }

 function iceCreamOrder(){
    console.log('Action creaye')

    return {
        type: ICECREAM_ORDERED,
        payload: 1 
    }
 }
 function CakeReIceCream (qty = 1){
    console.log('cake restock')
    return {
        type: ICECREAM_RESTOCK,
        payload: qty 
    }
 }
 function CakeReStock (qty = 1){
    console.log('cake restock')
    return {
        type: CAKE_RESTOCK,
        payload: qty 
    }
 }

 initialStateCake = {
    numOfCakes:  10 

 }

 initialStateIceCream = {
    numOfIceCream: 20

 }

// Create a Reducer 
const CakeReducer = (state = initialStateCake , action )=>{
    console.log('Reducer fun')
   switch (action.type){
    case CAKE_ORDERED:
      return  {...state , numOfCakes: state.numOfCakes - 1 }
    
    case CAKE_RESTOCK: 
      return {...state ,  numOfCakes:  state.numOfCakes + action.payload}

     default : 
       return state
   }
}


// Create a Reducer 
const IceCreamReducer = (state = initialStateIceCream , action )=>{
    console.log(' ICE CREMAE Reducer fun')
   switch (action.type){
    case ICECREAM_ORDERED:
      return  {...state , numOfIceCream: state.numOfIceCream - 1 }
    
    case ICECREAM_RESTOCK: 
      return {...state ,  numOfIceCream:  state.numOfIceCream + action.payload }

    case CAKE_ORDERED:
      return {...state , numOfIceCream: state.numOfIceCream - 1 } 

     default : 
       return state
   }
}
// store  

// R1: hold the application state (i.e cake Reducer has initialstate)
const rootReducer = combineReducers({CakeReducer: CakeReducer , IceCreamReducer: IceCreamReducer } )
const store = createStore(rootReducer)
// R2: Allow access to state via getStore
console.log(' Intial state' , store.getState());
// R4: Subscribe 
const unsubscripe = store.subscribe(()=> { console.log('upadta' , store.getState())})

// R3: dispactch 
// store.dispatch(CakeOrder())
// // console.log(' Intial staWWWWte' , store.getState());

// store.dispatch(CakeOrder())
// // console.log(' Intial staWW/Wte' , store.getState());

// store.dispatch(CakeOrder())
// // console.log(' Intial staWWte' , store.getState());


const actions  = bindActionCreators({CakeOrder , CakeReStock , iceCreamOrder, CakeReIceCream  }, store.dispatch)
actions.CakeOrder()
actions.CakeOrder()
actions.CakeOrder()
actions.CakeReStock(3)
actions.iceCreamOrder()
actions.iceCreamOrder()
actions.iceCreamOrder()
actions.CakeReIceCream(3)



// store.dispatch(CakeReStock(3))
unsubscripe()
// Unsbsubsripe 
  








 