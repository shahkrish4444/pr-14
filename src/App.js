import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Curd from './components/Realtimestore/Curd';
import Home from './components/Realtimestore/Home';
import Login from './components/Realtimestore/Login';
import Signup from './components/Realtimestore/SignUp';
import Nevbar from './components/Realtimestore/Nevbar';
import EditStudent from './components/Realtimestore/EditStudent';
import Students from './components/Realtimestore/Students';
import StudentDetail from './components/Realtimestore/Details';
import ChangePassword from './components/Realtimestore/PassChange';
import AddStudent from './components/Realtimestore/AddStudent';
import { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import React from 'react';
import { Router } from 'react-router-dom';
import UserProvider from './components/Realtimestore/useUserContext ,jsx';
function App() {


  const [activeUser, setActiveUser] = useState(JSON.parse(localStorage.getItem('CurrentUser')) || null);

  const [data, setData] = useState(() => JSON.parse(localStorage.getItem('User')) || []);

  useEffect(() => {
    localStorage.setItem('User', JSON.stringify(data));
  }, [data]);



  return (
    <>

      <BrowserRouter>
        <Nevbar activeUser={activeUser} />
        <Routes>
          <Route path="/" element={<Home activeUser={activeUser} />} />
          <Route path="/student" element={<Students />} />
        <Route path="/student/addstudent" element={<AddStudent/>}/>  
           <Route path="/student/edit/:id" element={<EditStudent/>}/>
          <Route path="/student/view/:id" element={<StudentDetail/>}/>   
          <Route
            path='/change-password'
            element={<ChangePassword activeUser={activeUser} data={data} setData={setData} />}
          />
          <Route path="/login" element={<Login activeUser={activeUser} setActiveUser={setActiveUser} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
