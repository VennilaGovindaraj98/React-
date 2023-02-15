import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { ordered , restocked } from "./cakeSlice";
// import { useSelector } from "react-redux";

export const CakeView = () =>{
   //useSelect hook will accepts the fuction as the parameters.
   // it will recives the state as params 

    const cake = useSelector((state)=>
        // console.log(state)
        state.cake.numOfCake
        // console.log(state=>)
     
    )

    const dispatch = useDispatch()
    console.log(cake)
     return (<div> 
     <h2> Number of cakes {cake} </h2>
     <button onClick={()=> dispatch(ordered())}> Order cakes</button>
     <button onClick = {()=> dispatch(restocked(3))}> Restock cakes</button>
     </div>)
}