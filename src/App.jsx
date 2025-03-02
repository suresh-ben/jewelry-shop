import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/home';
import Product from './pages/product'
import Collections from './pages/collections'

import './App.css';
function App() {
    

    return (
        <Router>
            <ScrollToTop>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/product' element={<Product />}/>
                <Route exact path='/collections' element={<Collections />}/>
                

                {/* Not found */}
                {/* <Route path='*' element={ <Navigate to="/404" /> } /> */}
                {/* <Route path='/404' element={< NotFound />} /> */}
            </Routes>
            </ScrollToTop>
        </Router>
    );
}

const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return <>
        {children}
    </>;
};

export default App;
