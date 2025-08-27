
import React, { useState , createContext, Children, useEffect} from 'react'

export const ThemeContext = createContext();//

const ThemeProvider = ({children}) => {

     useEffect(()=>{
        const fetchData =async()=>{
            try{
                  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                const d = await response.json();
                setData(d)
            }
            catch(e){
                console.log(e)
            }
        }

        fetchData()
     },[])
    const[theme,setTheme] = useState("light");
    const [data, setData] = useState([])

    const toggleTheme =()=>{
        // when the button is pressed once if its light theme then it should convert to dark if its dark it should convert to light.
       setTheme(prev => (prev === "light" ? "dark" : "light"));

    }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme, data}}>
        {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider;
