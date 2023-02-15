const redux = require('redux')
const createStore = redux.createStore
const produce = require('immer').produce


const initialState = {
    name: 'vennila',
    address: {
        street: '123',
        city: 'boston',
        state: 'USA'
    }
}

const STREET_UPDATED = 'STREET_UPDATED'


function streetUpdate( street = ''){
  return {
    type: STREET_UPDATED,
    payload: street
}
}


const streetReducer = (state = initialState , action)=>{

    switch (action.type)
{
    case STREET_UPDATED:
        // return {...state , address: {
        //     ...state , street: action.payload
        // }}
         return produce(state , (draft) =>{
            draft.address.street = action.payload
         })
    default: 
       return state      
}


}


const store = createStore(streetReducer)
console.log('intial state' , store.getState())
const unsubscripe = store.subscribe(()=> console.log('updated' ,store.getState()))

store.dispatch(streetUpdate('test'))
// console.log('euu' , store.getState() )
unsubscripe()




