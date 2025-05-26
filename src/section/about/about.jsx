import React from 'react';
import './about.scss';
import profile from '../../assets/images/profile.png';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import pdfURL from '../../assets/resume/Fabregas, Mark Angelo F.pdf';
import { motion } from 'framer-motion';

const About = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfURL;
        link.setAttribute('download', 'MarkAngeloFabregasResume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <section id="about" className="about py-5 px-3 p-lg-5">
            <div className='container row px-3'>
                <motion.div className='left-container col-lg-6 col-md-12 px-0 px-lg-5 py-3 py-lg-5'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <div className='image-container'>
                        <img src={profile} alt="Mark Angelo Fabregas" className='profile img-fluid' />
                    </div>
                </motion.div>

                <motion.div className='right-container col-lg-6 col-md-12 px-0 px-lg-5 py-3 py-lg-5'
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <h2 className='mb-4'> About Me</h2>
                    <div className='line mb-4'></div>
                    <p>
                        I’m an aspiring Web Developer with a passion for crafting intuitive, user-friendly websites that provide seamless experiences. I thrive on turning ideas into functional, visually appealing designs and enjoy solving complex problems along the way. With a constant drive to learn and grow, I stay curious and motivated to expand my skill set.
                    </p>
                    <p>
                        I’m open to job opportunities, freelance projects, and collaborations where I can contribute to exciting work, build innovative solutions, and continue to grow as a developer.
                    </p>
                    <p>
                        Feel free to contact me if you're interested in working together or have any questions!
                    </p>

                    <div className='row g-3'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <button className='btn-1 py-2 w-100' onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact Me
                                <ArrowOutwardIcon className='ms-2 fs-5' />
                            </button>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <button className='btn-2 py-2 w-100' onClick={() => handleDownload()}>View Resume
                                <SaveAltIcon className='ms-2 fs-5' />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );

}

export default About;