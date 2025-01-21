import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [ 'l', 'o', 'b', 'o', 'd', 'a', 'n']
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray} 
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray} 
                idx={15} />
                </h1>
                <h2>Backend Developer / Frontend Developer / Cybersecurity</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home
