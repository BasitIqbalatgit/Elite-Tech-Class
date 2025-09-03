import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeFromCart } from "../redux_store/CartSlice";
import { addToCart,removeFromCart } from "../../redux_store/CartSlice";
import { setToFalse, setToTrue } from "../../redux_store/LogedInSlic";

const Cart = () => {
  // const [name, setName] = useState("")
  // const [id, setId] = useState("")

  // const dispatch = useDispatch();
  // const items = useSelector((prev) => prev.cart.items);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let obj = { id: id, name: name }
  //   dispatch(addToCart(obj))
  //   setName("")
  //   setId(0)
  // }

  
  const login = useSelector((prev)=> prev.login.login)
  const dispatch = useDispatch()
  useEffect(()=>{
    console.log(login)
    console.log("Hi")
  })

  return (
    <div style={{ width: "100%", height: "500px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor : login ? "black" : "white"}}>

      {/* <h4> My Own Cart</h4>
      <form onSubmit={handleSubmit}>
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit" >Add</button>
      </form>
      {
        items.map((itm) => (
          <li key={itm.id}>{itm.id} : {itm.name}</li>
        ))
      } */}


      <p style={{color: login ? "white": "black"}}> You are  {login ? "LogedIn":"Loged Out"}</p>
      {
        login ? <button onClick={()=>dispatch(setToFalse())}>Log Out</button> :
      <button onClick={()=> dispatch(setToTrue())}> Login </button>
      }
    </div>
  );
};
export default Cart;


// Redux
// what it is?--- state management library ... ( useState , Context.)
// why we use it?
// 1. centralized access (store....apni states ko manage krain gyy)
// 2. provides us the predictable stae updation using actions and reducer.
// debuggin
// redux dev tool kit.


// problem..
// use for large scale application .. (fyp, semester project.)
// complex , scaleable, maintainable and so..

// how to use it?
//1. store
// store as a warehouse which has all the items.
// {
//     cart:[]
// }

//2. action (is like telling the warehouse manager what you want.)
// for exmaple . "Add this prodcuet to my cart"
// {
//     type: "ADD_TO_CART",
//     payload: {id:1, name:"Laptop", price:1000}
// }

// 3. reducer (a function that takes state and actions decides what to do. )


//4. dispatch (which sends the request)
// 5. Selector (reading the state)
// 6. slice ---> (actions + reducer.)