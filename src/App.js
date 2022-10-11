// import logo from './logo.svg';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const showToastMessage = () => {
    toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
};
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    <button className='p-6 bg-purple-700' onClick={showToastMessage}>Tost</button>
    <ToastContainer/>
  </div>
  );
}

export default App;
