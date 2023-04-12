import React from 'react'
import Banner from './Banner';
import FeaturedProduct from './FeaturedProduct';
import Latestproducts from './Latestproducts';
import TrendingProducts from './TrendingProducts';

const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedProduct />
            <Latestproducts />
            <TrendingProducts />
        </div>
    )
}

export default Home