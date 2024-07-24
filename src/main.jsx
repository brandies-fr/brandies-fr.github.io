
// BrowserRouter 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Products from './pages/Products.jsx';
import Cepages from './pages/Cepages.jsx';
import Ambition from './pages/Ambition.jsx';
import Whoweare from './pages/Whoweare.jsx';
import Contact from './pages/Contact.jsx';
import Notfound from './pages/Notfound.jsx';
import './index.css';
import { Armagnac } from './pages/Armagnac.jsx';
import Cognac from './pages/Cognac.jsx';
import { Xobrandies } from './pages/Xobrandies.jsx';
import Bordeauxsuperieur from './pages/Bordeauxsuperieur.jsx';
import { Lusscsaintemillion } from './pages/Lusscsaintemillion.jsx';

// const inputElement = useRef(null);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "cepages",
    element: <Cepages />,
  },
  {
    path: "ambition",
    element: <Ambition />,
  },
  {
    path: "whoweare",
    element: <Whoweare />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "armagnac",
    element: <Armagnac />,
  },
  {
    path: "cognac",
    element: <Cognac />,
  },
  {
    path: "xobrandies",
    element: <Xobrandies />,
  },
  {
    path: "bordeauxsuperieur",
    element: <Bordeauxsuperieur />,
  },
  {
    path: "lussacsaintemillion",
    element: < Lusscsaintemillion/>,
  },
  {
    path: "*",
    element: <Notfound />,
    // element: <App />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
var l = window.location;
// if(l.href.includes('cepages') ) {
//     router.navigate('/ambition');
// }
switch (true) {
  case l.href.includes("cepages"):
    router.navigate("/cepages");
    break;
  case l.href.includes("ambition"):
    router.navigate("/ambition");
    break;
  case l.href.includes("products"):
    router.navigate("/products");
    break;
  case l.href.includes("contact"):
    router.navigate("/contact");
    break;
   case l.href.includes("whoweare"):
     router.navigate("/whoweare");
     break;
   case l.href.includes("armagnac"):
     router.navigate("/armagnac");
     break;
   case l.href.includes("cognac"):
     router.navigate("/cognac");
     break;
   case l.href.includes("xobrandies"):
      router.navigate("/xobrandies");
      break;
    case l.href.includes("bordeauxsuperieur"):
        router.navigate("/bordeauxsuperieur");
        break;
    case l.href.includes("lussacsaintemillion"):
          router.navigate("/lussacsaintemillion");
          break;
  default:
    router.navigate("/");
}
root.render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

