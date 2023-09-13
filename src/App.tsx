import './App.css'
import React, { useEffect } from 'react';
import Home from './Pages/HomePage';
import Signup from './Pages/Signup';
import { Routes, Route} from 'react-router-dom'
import Signin from './Pages/Signin';
import Courses from './Pages/Courses';
import { useDispatch } from 'react-redux';
import data from "./components/CourseData.json"
import { loadInvoices } from './Redux/Action';

const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(loadInvoices(data))
  },[])
  return (
    <>
    <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path='/courses' element={<Courses/>}/>
    </Routes>
   </>
  );
};

export default App;
