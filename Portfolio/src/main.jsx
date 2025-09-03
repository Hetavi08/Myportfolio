import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Services from './Pages/Service';


let a = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/services',
    element:<Services/>
  },
  {
    path: '/about',
    element:<About/>
  },
  {
    path: '/project',
    element:<Project/>
  },
  {
    path: '/contact',
    element:<Contact/>
  },
    
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={a}/>
  </StrictMode>,
)
