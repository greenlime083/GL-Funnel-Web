import './App.css';
import Auth from './AuthPage/auth';
import Dashboard from './Dashboard/dashboard';
import Users from './Users/users';
import Sidebar from './sidebar/sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useEffect, useState  } from 'react';

function App() {


  const [isOpen, setIsOpen] = useState(false);


  useEffect( () => {
    // setCompanyList([]);
    setIsOpen(true);

    console.log(window.location.pathname)

    if(window.location.pathname == "/auth"){
      setIsOpen(false)
    }

 }, []);

 const updateOpen = () => {
  setIsOpen(true)
 }
 
  return (
    <div className="App">



    <BrowserRouter>
    <div id='sidebard-container'>
 {isOpen && <Sidebar />}
 </div>
      <Routes>

        <Route path='/' element={<Navigate to="/auth" />}></Route>
        <Route path="auth" element={<Auth />}/>
        <Route path="dashboard" element={<Dashboard open={updateOpen}/>}>  </Route>
        {/* <Route index element={<Dashboard />} /> */}
        <Route path="users" element={<Users/>}/>
      </Routes>
     
    </BrowserRouter>
    </div>
  );
}

export default App;
