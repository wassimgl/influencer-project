import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
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
import Influence from './pages/Influence';
import Message from './component/Message';
import Tarif from './pages/Tarif';
import Team from './pages/Team';
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
<Route path='/influence' element={<Influence/>}/>
<Route path='/message' element={<Message/>}/>
<Route path='/tarif' element={<Tarif/>}/>
<Route path='/team' element={<Team/>}/>

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
