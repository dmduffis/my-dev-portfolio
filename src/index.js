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
    path: "/overview/:projectId",
    element: <Overview />
  },
  {
    path: "/",
    element: <App />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);