// hide show text clicking button
import React from 'react'

function App()
{
   const[status,setStatus]=React.useState(true)
    return(

        <>
        {
           status?
           <h1>hello jagdish</h1>
           :null
        }

        <button onClick={()=>setStatus(false)}>hide </button>
        <button onClick={()=>setStatus(true)}>show</button>
        </>
    )


}

export default App;