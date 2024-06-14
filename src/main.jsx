import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Products } from './pages/Products.jsx'
import { Cepages } from './pages/Cepages.jsx'
import { Ambition } from './pages/Ambition.jsx'
import { Whoweare } from './pages/Whoweare.jsx'
import { Contact } from './pages/Contact.jsx'
import {  createBrowserRouter,   RouterProvider,} from "react-router-dom";
// import { HashRouter as Router } from 'react-router-dom';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element:  <App /> 
  },
  {
    path: "products",
    element:  <Products /> 
  },
  {
    path: "cepages",
    element:  <Cepages/> 
  },
  {
  path: "ambition",
  element:  <Ambition/> 
},
{
  path: "whoweare",
  element:  <Whoweare/> 
},
{
  path: "contact",
  element:  <Contact/> 
},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <Router>
      <App />
    </Router> */}
  <RouterProvider router = {router} />
  </React.StrictMode>
)
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
    
//     <RouterProvider router = {router} />
//   </React.StrictMode>,
// )
