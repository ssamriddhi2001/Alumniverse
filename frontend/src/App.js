import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Events from './Pages/Events';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    // <HomePage/>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/events' element={<Events />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
