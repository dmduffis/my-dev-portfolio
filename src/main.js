import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
// import pages 
import App from './App';
import Overview from './Overview';
// import Router to link pages
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
// define routes for linked pages
const router = createBrowserRouter([
    {
        path: "/overview/:index",
        element: _jsx(Overview, {})
    },
    {
        path: "/",
        element: _jsx(App, {})
    },
    {
        path: "home",
        element: _jsx(App, {})
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(RouterProvider, { router: router }) }));
