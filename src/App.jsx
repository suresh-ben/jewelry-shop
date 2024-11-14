import './App.css';



import carousel01 from './assets/carousel01.jpg';
import carousel02 from './assets/carousel02.jpg';
import carousel03 from './assets/carousel03.jpeg';

import Nav from './Nav';
import Carousel from './Carousel';
import Categories from './Categories';
import Discover from './Discover';
import NewCollections from './NewCollections';
import Contact from './Contact';
import Promises from './Promises';
import Reviews from './Reviews';
import About from './About';

function App() {
    return (
        <div className="">
            <Nav />
            <Carousel 
                intervalInMs={5000}
                heightClass='aspect-[7/3]'
                data={[
                    <img src={carousel01} className='w-full h-full object-cover' />,
                    <img src={carousel03} className='w-full h-full object-cover' />,
                    <img src={carousel02} className='w-full h-full object-cover' />
                ]}
            />

            <Categories />
            <Discover />
            <NewCollections />
            <Contact />
            <Promises />
            <Reviews />
            <About />
        </div>
    );
}

export default App;
