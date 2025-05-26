import React from 'react';
import './home.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';


const Home = () => {

    return (
        <section id="home" className="home">
            <span className='circle1'></span>
            <span className='circle2'></span>
            <span className='circle3'></span>
            <span className='circle4'></span>
            <span className='circle5'></span>
            <span className='circle6'></span>

            <div className='container d-flex flex-column justify-content-start align-items-center'>
                <p className='name mb-2'>Hi, I'm Mark Angelo Fabregas</p>
                <h1 className='mb-3' >web developer.</h1>
                <div className='socials row row-cols-4 g-3 mb-3'>
                    <a href="https://www.linkedin.com/in/mark-angelo-fabregas" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className='col fs-4' />
                    </a>
                    <a href="https://github.com/markfbrgs" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className='col fs-3' />
                    </a>
                    <a href="https://instagram.com/mfbrgs" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon className='col fs-3' />
                    </a>
                    <a href="https://facebook.com/mfbrgs" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon className='col fs-3' />
                    </a>
                </div>
                <FontAwesomeIcon
                    icon={faCircleChevronDown}
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                    className='icon mt-5'
                />
            </div>
        </section>
    );
}

export default Home;