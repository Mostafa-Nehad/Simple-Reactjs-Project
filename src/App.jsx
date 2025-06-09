import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About/About'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'


let route= createBrowserRouter([
  {path:"",element:<Layout/> , children:[
    {index:true,element:<Home/>},
    {path:"about",element:<About/>},
    {path:"contact",element:<Contact/>},
    {path:"portfolio",element:<Portfolio/>},
  ]} ,

])
function App() {
  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
