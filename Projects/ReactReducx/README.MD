
ReactRedux: 
   Redux is a predictable state container for Javascript apps.
   it is for javascript apps.
   It is a state container. 
   it is predictable.
   
   1.Redux is for javascript applications and this is really important React is not tied to react it can be used with any UI library or react , angular , view or even with vannila javacript. 
   2.Redux stores the state of your application.State of an app is the state represented by all the individual component of thet app. Redux will store and manage the application state.
   3.EX: todo list app -> item(pending) -> item(completed) , in redux all atate transitions are explicit 
   to keep track of them in other words The changes to your application's state become predicitable.

   Redux is  a libary used to build UI.
   Redux is a library for managing state in a predictable way in Javascript applications.
   React-Redux is a library that provides binding to use React and Redux together in an applications.

Steps: 
    Create a new folder 
    npm init --y 
    create index.js file
    node index   

Three core Components: 
      cake shop 

  Entities 
    shop  = stores cakes on a shelf.
    shopKeeper - At the front of the store.
    customer - At the store entrance 

  Activities:
    customer - Buy a cake 
    ShopKeeper - Remove a cake from thebshelf 
                Receipt to keep track.

  Three core concepts: 
      1.state  -Holds the state of your app
      2.Action - Decribes what happend.
      3.Reducer  - Ties the store and actions together.

    First Priciple:
        The state of your whole app is stored in an object tree within a single store.
          Maintain our app state in single obj which would be managed by the Redux store.

          cake shop - le's assume we are tracing the cakee on the shelf.
             {
                numberofCakes: 10 
             }
    Second Principle: 
        The only way to change the state is to emit an action , an object describing what happend.
           To update the state of your app , you need to let redux know about that with an action.
            Not allowed to directly update the state object.
        cake shop:    
             Let the shopKeeper know about the our action - BUY CAKE. 
             {
                type: 'BUY_CAKE'
              }     
    Thrid principle:
         To specify how the state tree is transformed by actions , you write pure reducers.
         Reducer = (prev , action) -> NewState
         Cake Shop:
           Reducer is the shopKeeper.

     
    Action: 
     An action is a object with type property
     Action creator is a fun that return an action.  

    State: 
        Function that accepts the state and action as arguments and returs the next state of the app.

    Responsibilities: 
          Holds app state 
          Allow access to state via getState()
          Allow state to be updated via dispatch(action)
          Register listerners via subscribe(listerber)
          Handles unregistering of listeners via the fuc returned by subscibe(listener)
    MiddleWare: 
         Is the suggested way to extends Redux with custom functinality. 
         Privides a third party extension point between dispatching an action and the moment it reaches to reducer   
         Use middleware for logging, crash reporting , performing asychronous tasks etc....
           import applaymidleware 
           pass is an arg to create store
           pass in then middle to the apply middleware

    Asyn actions:

       Asyn API calls to fetch data from an end point and use that data in your app.
       state  ={
        loading: true , 
        data = [],
        error: ''
       }
       Action: 
         FETCH_USERS_REQUEST: Fetch list of users
         FETCH_USERS_SUCCESS: Fetched successfully.
         FETCH_USERS_FAILURE: Error fetching the data.

       Reducers: 
        FETCH_USERS_REQUEST: 
               loading: true
        FETCH_USERS_SUCCESS: 
               loading: false
               users: data {from: API} 
        FETCH_USERS_FAILURE: Error fetching the data.
               loading: true 
               error: error {from API}
               

          

I learned below topics today:
    Redux  - Action , reducer , store ,Dispatch , ComibineReducers [Tried some example and exxuted.] , middleware[redux-logger] 








               








      