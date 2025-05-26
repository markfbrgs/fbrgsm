import React, { useState, useEffect } from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faLightbulb, faLayerGroup, faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'project', 'contact'];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav>
            <div className='navbar px-md-5 px-4  py-2'>
                <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
                    <FontAwesomeIcon icon={faHouse} />
                </a>
                <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
                    <FontAwesomeIcon icon={faUser} />
                </a>
                <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </a>
                <a href="#project" className={activeSection === 'project' ? 'active' : ''}>
                    <FontAwesomeIcon icon={faLayerGroup} />
                </a>
                <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
                    <FontAwesomeIcon icon={faPhone} />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
