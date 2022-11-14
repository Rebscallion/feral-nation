//import styles
import '../css/styles.min.css';

// import dependecies
import { HashRouter, Routes, Route } from 'react-router-dom';

// import components
import Navbar from './Navbar'
import Footer from './Footer'

//import pages
import Home from '../pages/Home'
import Profile from './CatProfile';
import About from '../pages/About'
import UpcomingEvents from './../pages/Events'
import Donate from '../pages/Donate';
import ApplyToAdopt from '../pages/ApplyToAdopt';

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cat_profile/:id" element={<Profile />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/apply" element={<ApplyToAdopt />}></Route>
        <Route path="/events" element={<UpcomingEvents />}></Route>
        <Route path="/donate" element={<Donate />}></Route>
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
