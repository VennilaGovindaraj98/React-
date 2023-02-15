V2. STEPS: 
  1.create a folder
  2.npm i --y 
  3.npm i redux 

V3: Three Core Concepts
   Cake Shop: 
   Shop - Stores Cakes on a shelf. 
   Shopkeeper  - Behind the counter.
   Customer - At the store entrance.

   Activities: 
      Customer - order a cake.
      Shopkeeper - Box a cake from the shlef 
                  Receipt to keep track.
    
  Cake shop scenorio                  Redux                          Purpose 
    Shop                               store                          Holds the state of your app.
    cake ordered                       Action                         Decribe what happend
    ShopKeeper                         Reducer                        Ties the store and actions 
                                                                      together 

  A store that holds the state of your app.
  An action that describe what happend in the app.
  A reducer which handeles the action and dedcide how to update the state.

v4: Three principle
  First Principle:

   The golbal state of your app is stored as an object inside the single store.

   Cake shop -> Let's assume we are tracting the number of cakes on the shelf. 
    {
      numberOfCakes: 10 
    }

  Second Princieple: 
     
     The only way to change the state is to dispatch an action , an object that describes what hapeend.
     
      To update the thet state of your app, you need to let redux know about that with an action.
      
      Not allowed to directly update the state object.

      Cake shop: 
        Scan QR Code and place an order - CAKE_ORDERED
        {
          type: 'CAKE_ORDERED
        }

  Third Priciple:
       To specify how the state tree is updated based an actions , you write pure reducers.
       Reducer -> (previous_state , action ) -> newState
       Cake Shop:
          Reducer is the shoopkeeper.
           const reducer = (state = intialState , action ) => {
             switch (action.type) {
              case 'CAKE_ORDERED'
                return {...prv , numOfCakes: state. }
             }
           }
v5:    
  Action  - To implement actions. 
   The only way to your application can interact with the store.
   Carry some info from your shop to the redux store.
   Plain JS objects.
   Have a type property that describe something that happend in the app.
   The type property is typically defined as string constants.

V6: 
  Reducer 
     Specify how the app's state changes in response to actions sent to the store.
     Funcions that accepts state and action as arguments and returs the nest state of the app.

V7:
  Store: 
     Only one store for the entire application.
     Responsiblilities: 
        Holds the application state.
        Allows access to state via getState()
        Allows state to be updated via dispacth(action).The dispatch methode accepts the actions as its arguments.
        Register listeners via subscribe(listerner) -> it exxuete anytime that state in the redux store changes.

V8:
  Restocking Cakes
    Everyday a vendor comes to the shop to restock the shelves. 
    The vendor can stock up one or more number of cakes depending on the previous day sales.
V9: Bind Action Creators 
  Helper Function - > Its alternative for dispatch.
V10: 
    ice cream - scenoria explianed.
v11 , v12:
   CombinedReducers
v13: Immer 
   Updated the nested attributes.
   It used to update only the required field.
    1.first arg - current state.
    2.Second arg - Is a func which recives the draft copy of the state so that is our arg to the arrow fun.But what immer allows us to do is update this draft as if state is mutable.
V14: MiddeleWare 
   is the suggested way to extend the redux with custom func.
   it basically provides a third party extension between dispatching an action and the momment it reaches the reducer.
V15: 
  Synchronous actions - As soon as an action was dispactched , the state was immediatly updated.
  If you dispatch the CAKE_ORDERED action , the mumOfCakes was right away decrementd by 1.
  ASynchronous actions - Asychronous API CALLS TO FETCH THE data from an end point and use that data in you app.
    
    state = {
        loading: true 
        data: []
        error: ''
    }

    loading: Dispaly loading spinner in ypu componenet.
    data - list of users.
    Error - Display the error to the user.

V16: Redux Thunk Middleware. 
   Axios - Request to an API end Point.
   Redux-Thunk - Define asynchronous action creators in your app.

Redux Require too much boilerPlate Code.
  1.Action 
  2.Action Object.
  3.Action Creator.
  4.switch statement in a reducer.
A lot of other package have to be installed to work with redux.
  Redux-thunk 
  Imeer 
  Redux-devtools  


v18: Project Setup
   1.Create a new folder 
   2.npm i @reduxjs/toolkit
   
   Toolkit the recommendations is group together the reducer logic and actions for a single feature in a single file.The file should contain slice as a suffix.
      Create cakeSlice.js 

v23: Extra Reducers: 
    we need to decrement the num of icecreams when a cake is ordered.
v24: Async thunk: 

V25: 
  npm create vite@latest react-rtk-demo
  npm i axios
  move the app and feature folder and change the sytax accordincally.

v26: Provider 
   1.npm i react-redux
   2.add the provider  - For to use the store.
   3.add the useselector to show the initial value 

v267: 
  useSelector - Is used to get of any state that is maintained in the state.
v27: 
   useDispacth - which is used to dispatch an action withj react-redux.
  It return a reference to the dispatch func from the redux store. 
V28: 
   






   
   
       
         



    
    



 




          




       



       





    


      

             










      



