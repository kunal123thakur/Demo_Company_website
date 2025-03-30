import React from 'react'
import Hero from './components/Hero'


import LocomotiveScroll from "locomotive-scroll";
import LandingPage from './components/LandingPage';
import LoadingAnimation from './components/LoadingAnimation';
import Navigation from './components/Navigation';
import Page1 from './components/Page1';
import MotionCard from './components/MotionCard';
import Page6 from './components/Page6';
import Cards from './comp_2/Cards';


// import NavBar from './components/Navbar';
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    
   <main className='relative min-h-screen w-screen overflow-x-hidden ' >
    <Navigation/>
    {/* <NavBar/> */}
    <LandingPage/>
   
    <Hero/>
    <Cards/>
    <Page1/>
    <LoadingAnimation/>
    <MotionCard/>
    <LoadingAnimation/>

    <Page6/>
   </main>
  )
}

export default App