import carousel01 from '../../assets/carousel01.jpg';
import carousel02 from '../../assets/carousel02.jpg';
import carousel03 from '../../assets/carousel03.jpeg';

import Nav from '../../components/Nav';
import Carousel from '../../components/Carousel';
import Categories from './components/Categories';
import Discover from './components/Discover';
import NewCollections from './components/NewCollections';
import Contact from './components/Contact';
import Promises from './components/Promises';
import Reviews from './components/Reviews';
import About from '../../components/About';

function App() {
    return (
        <div className="">
            <Nav />
            <Carousel
                intervalInMs={5000}
                heightClass="aspect-[7/3]"
                data={[
                    <img
                        src={carousel01}
                        className="w-full h-full object-cover"
                    />,
                    <img
                        src={carousel03}
                        className="w-full h-full object-cover"
                    />,
                    <img
                        src={carousel02}
                        className="w-full h-full object-cover"
                    />,
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