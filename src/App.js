
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/User/Header/Header';
import Footer from './components/User/Header/Footer';
import Home from './components/User/Home/Home';
import Products from './components/User/Product/Products';
import AboutUs from './components/User/AboutUs/AboutUs';
import ContactUs from './components/User/ContactUs/ContactUs';
import Registration from './components/User/Auth/Registration';
import Login from './components/User/Auth/Login';
import Profile from './components/User/Auth/Profile';
import ForgetPassword from './components/User/Auth/ForgetPassword';
import ResetPassword from './components/User/Auth/ResetPassword';


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/products' element={<Products />} />
                <Route exact path='/aboutus' element={<AboutUs />} />
                <Route exact path='/contactus' element={<ContactUs />} />
                <Route exact path='/registration' element={<Registration />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/forgot-password' element={<ForgetPassword />} />
                <Route exact path='/profile' element={<Profile />} />
                <Route exact path='/reset-password' element={<ResetPassword />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
