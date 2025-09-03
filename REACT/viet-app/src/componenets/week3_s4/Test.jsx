import React, { useReducer, useState } from 'react'
import "./Test.css"


const ACTIONS = {INCREMENT: "Inc",DECREMENT:"Decrement" , RESET:"Reset"}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        case ACTIONS.RESET:
            return {count: 0}
        default:
            return state;
    }
}

const Test = () => {

    // const[count,setCount] = useState(0)
    // use Reducer.
    const [state, dispatch] = useReducer(reducer, { count: 10 })

    const handleDecrement = () => {
        // setCount(count-1)
        dispatch({ type: ACTIONS.DECREMENT})
    }

    const handleIncrement = () => {
        // setCount(count+1)

        dispatch({ type: ACTIONS.INCREMENT })
    }

    const handleReset=()=>{
        dispatch({type: ACTIONS.RESET})
    }

    return (
        <div className='container'>
            <button onClick={handleDecrement}> - </button>
            <p>{state.count}</p>
            <button onClick={handleIncrement}> + </button>
            <button onClick={handleReset}> Reset </button>
        </div>
    )
}

export default Test




/// useReducer is a hook ...
// used for --> state management

// solved which problem --> complex.. todo application (add todo , delete todo , togole todo...1 state )

// use Reducer ..
// 1. reducer function
// 2. dispatch
// 3. actions.
