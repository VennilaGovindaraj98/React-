import React from "react";
import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import {fetchUsers} from './userSlice'



export const UserView = () =>{

     const user = useSelector(( state)=>
     //  {
          state.user
     // }
     )

     console.log(user)
     const dispatch = useDispatch()
     useEffect( ()=>
      { 
          dispatch(fetchUsers())
     } ,
     
      [])
     return (<div> 
     <h2> USERS</h2>

     {user.loading && <div>Loadinggggg...........</div>}
     {!user.loading  &&  user.error? (<div>Error {user.error}</div>) : null }
     {/* {!user.loading && user.users.length?  (<ul>
      {user.users.map((u) => 
        <li key ={u.id}>{u.name}</li>)}
      </ul>
      )  :null } */}
      
     </div>)
}