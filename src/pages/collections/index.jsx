import React from 'react'

import Nav from '../../components/Nav'
import About from '../../components/About'
import Banner from './components/Banner'
import Filters from './components/Filters'
import Products from './components/Products'


export default function index() {
    return (
        <div>
            <Nav />
            <Banner />
            <div className='flex parent-prods relative justify-end'>
                <Filters />
                <Products />
            </div>
            <About />
        </div>
    )
}
