// import logo from './logo.svg';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './App.css';
import Routers from './components/Routers';


function App() {

  return <RouterProvider router={Routers}/>
}

export default App;
