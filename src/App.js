import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/User/NavBar';
import Header from './components/User/Header';
import Banner from './components/User/Banner';
import Footer from './components/User/Footer';
import FeaturedProduct from './components/User/FeaturedProduct';
import Latestproducts from './components/User/Latestproducts';
import TrendingProducts from './components/User/TrendingProducts';

function App() {
    return (
        <Router>
            <Header />
            <NavBar />
           
            <Footer />
        </Router>
    );
}

export default App;
