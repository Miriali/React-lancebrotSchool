import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Courses from '../../components/Courses/Courses';
import Team from '../../components/Team/Team';

function Home() {
    return (
        <>
        <Hero />
        <About />
        <Courses />
        <Team />
        </>
    );
}

export default Home;