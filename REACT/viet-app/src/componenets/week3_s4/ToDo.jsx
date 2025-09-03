import React, { useReducer, useState } from 'react'


// INITIAL STATE
const initialTodos =[
];

// ACTION
const ACTIONS = {ADD: "ADD TODO", TOGGLE: "TOGGLE TODO", DELETE : "DELETE TODO"}

// reducer 
function reducer (state, action){
    switch (action.type){
        case ACTIONS.ADD:
            
            return [
                ...state,
                {id: Date.now(), text: action.payload, completed:false}
            ]
    
        case ACTIONS.TOGGLE:
            return state.map((todo)=>todo.id === action.payload ? {...todo, completed: !todo.completed}: todo)
        case ACTIONS.DELETE:
            return state.filter((todo)=> todo.id !== action.payload )
        default:
            return state;
    }
}
const ToDo = () => {
    const[task, setTask] = useState("")
    // const[todos, dispatch] = useReducer(reducer,[])
    const[todos, dispatch] = useReducer(reducer,[])// add, delete, toggle (set- rducer)


    const handleAdd=()=>{
        if(task.trim() === "") return ;
        dispatch({type:ACTIONS.ADD, payload:task})
        setTask("")
    }


  return (
    <div style={{margin:"20px", fontFamily:"Arial"}}>
        <h2>Todo Application (use Reducer)</h2>
        {/* input field and button  */}

        <input type='text' value={task} placeholder='Eter your task' onChange={e=>setTask(e.target.value)} />

        <button style={{marginLeft:"5px"}} onClick={handleAdd}>Add</button>

        {/* todo list  */}
        <ul style={{ marginTop:"20px", padding:0, lineStyle:"none"}}>
            {
             todos.map((todo)=>(
                <li key={todo.id} style={{marginBottom:"10px", textDecoration: todo.completed ? "line-through":"none" }}>
                    <p>
                        {todo.text}
                        </p>
                    <button style={{marginLeft:"5px"}}
                    // onClick={dispatch({type:ACTIONS.TOGGLE, payload: todo.id})}
                    onClick={()=>dispatch({type:ACTIONS.TOGGLE, payload: todo.id})}
                    >{todo.completed? "Undo" : "Completed"}</button>
                    <button style={{marginLeft:"5px"}}
                        onClick={()=>dispatch({type:ACTIONS.DELETE, payload: todo.id})}
                    > Delete </button>
                </li>
             ))
            }
        </ul>
    </div>
  )
}

export default ToDo