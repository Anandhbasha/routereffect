// import React from 'react'
// import Navbar from './Components/Navabar/Navbar'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
// import All from './Pages/All/All'
// import Mens from './Pages/Mens/Mens'
// import Womens from './Pages/Womens/Womens'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className='App'>
//         <Navbar/>
//       </div>
//       <Routes>
//         <Route path='/' element={<All/>}/>
//         <Route path='/mens' element={<Mens/>}/>
//         <Route path='/womens' element={<Womens/>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'

const App = () => {
  const [count,setCount] = useState(0)
  const handleCount = ()=>{
    setCount((curr)=>curr+1)
  }
  useEffect(()=>{
    // setCount((curr)=>curr+1)
    console.log("UseEffect is working");
    
  },[])
  return (
    <div className='App'>
      <p>{count}</p>
      <button onClick={handleCount} >Click</button>
    </div>
  )
}

export default App