import React from "react";
import { useSelector , useDispatch } from "react-redux";
import {ordered , restocked} from './iceCreamSlice'

export const IceCreamView = () =>{
     
    const [value ,setValue] = React.useState(1)
     const numOfIce = useSelector((state)=>{
          return  state.iceCream.numOfIceCream
          // console.log(state.iceCream.numOfIceCream)
     } )

     const dispatch = useDispatch()
     return (<div> 
     <h2> Number of Ice cream {numOfIce}</h2>
     <input type='text' value = {value} onChange={(e) => setValue(parseInt(e.target.value))} > 
     </input>
     <button onClick={()=> dispatch(ordered())}> Order Ice cream</button>
     <button onClick = {()=> dispatch(restocked(value))}> Restock Ice cream</button>
     </div>)
}