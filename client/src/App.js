import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
// import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact'
import FooterPage from './component/Footer';
import Profile from './pages/Profile';
import './app.css';
import DashbordAdmin from './pages/DashbordAdmin';
import ListInfluencer from './pages/ListInfluencer';
import ListCustomer from './pages/ListCustomer';
import ProtectRoute from './component/ProtectRoute';
import ListAdmin from './pages/ListAdmin';
import LoginAdmin from './pages/LoginAdmin';
import Home from './pages/Home';
import LoginInfluencer from './pages/LoginInfluencer';
import RegisterInfluencer from './pages/RegisterInfluencer';

function App() {
  return (
    <>
    
    <Navbar/>
    <div className='App'>
    <Routes>
    <Route path='/' element={<Home/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/logininfluencer' element={<LoginInfluencer/>}/>
<Route path='/registerinfluencer' element={<RegisterInfluencer/>}/>
<Route path='/profile' element={<Profile/>}/>

<Route path='/loginadmin' element={<LoginAdmin/>}/>
 <Route element={<ProtectRoute/>} >
<Route path='/dashbordadmin' element={<DashbordAdmin/>}/>
<Route path='/dashbord/listinfluncer' element={<ListInfluencer/>}/>
<Route path='/dashbord/listcustomer' element={<ListCustomer/>}/>
<Route path='/dashbord/listadmin' element={<ListAdmin/>} />
</Route>
    </Routes>
  
  </div>
  <FooterPage/>
  
  </>
  );
}

export default App;
