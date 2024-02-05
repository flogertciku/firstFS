import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import AddUser from './components/AddUser';
import Home from './components/Home';
import Details from './components/Details';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/addUser" element={<AddUser></AddUser>} />
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="/user/:index" element={<Details></Details>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
