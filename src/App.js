
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Contact from './Pages/Contact/Contact'
import Login from './Pages/Login/Login'

function App() {
  return (
    <div>
   <Navbar></Navbar>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/about' element={<About></About>}></Route>
     <Route path='/appointment' element={<Appointment></Appointment>}></Route>
     <Route path='/reviews' element={<Reviews></Reviews>}></Route>
     <Route path='/reviews' element={<Reviews></Reviews>}></Route>
     <Route path='/contact' element={<Contact></Contact>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     
     
   </Routes>
    </div>
  );
}

export default App;
