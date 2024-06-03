import React from 'react';
import ReactDOM from 'react-dom/client';

// import pages 
import App from './App'
import Overview from './Overview'

// import Router to link pages
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// define routes for linked pages
const router = createBrowserRouter([
  {
    path: "/overview/:index",
    element: <Overview />
  },
  {
    path: "/",
    element: <App />
  },
  {
    path: "home",
    element: <App />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
