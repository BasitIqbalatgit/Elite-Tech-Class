import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import Nav from './Nav';

const Week3Home = () => {
  const { data,theme } = useContext(ThemeContext);

  return (
    <div style={{ display: "flex", flexDirection:"column",gap: "30px"}}>
      <Nav />
      {data.map(element => (
        <div className='card' style={{backgroundColor: theme==="light" ? "black": "wheat", color: theme === "light" ? "white":"black", }} key={element.id}>
          <h1>id : {element.id}</h1>
          <p>Title: {element.title}</p>
          <p>completed: {element.completed ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  )
}

export default Week3Home;

//Api -> application programming interface.
// you -> waiter (food) -> chef
// browser -> Api -> Database/placeholder(fake json data)


// Context Api... (Theme)
// App -> Home -> nav -> toggleBtn (prop drilling)

// Context Api is made in 3 steps.
// craeteContext --> crate a context object.
// Provider ->suplies the context value.
// useContext --> consume the context in any child component.



// App> week3Home > nav > toggleBtn (prop dirling)