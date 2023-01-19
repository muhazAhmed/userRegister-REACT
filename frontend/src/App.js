import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.scss';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/login", element: <Login />},
  {path: "/register", element: <Register />},
  {path: "/dashboard", element: <Dashboard />},
  {path: "/*", element: <PageNotFound />},
])

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
