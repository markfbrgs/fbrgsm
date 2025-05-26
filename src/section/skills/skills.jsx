import React from 'react';
import './skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faServer, faDatabase, faScrewdriverWrench, faPalette } from '@fortawesome/free-solid-svg-icons';
import c from '../../assets/icons/c.png';
import cplus from '../../assets/icons/c++.png';
import js from '../../assets/icons/js.png';
import php from '../../assets/icons/php.png';
import python from '../../assets/icons/python.png';
import html from '../../assets/icons/html.png';
import css from '../../assets/icons/css.png';
import sass from '../../assets/icons/scss.png';
import react from '../../assets/icons/react.png';
import bootstrap from '../../assets/icons/bootstrap.png';
import sql from '../../assets/icons/sql.png';
import nodejs from '../../assets/icons/nodejs.png';
import expressjs from '../../assets/icons/expressjs.png';
import mysql from '../../assets/icons/mysql.png';
import postgresql from '../../assets/icons/postgresql.png';
import git from '../../assets/icons/git.png';
import github from '../../assets/icons/github.png';
import figma from '../../assets/icons/figma.png';
import canva from '../../assets/icons/canva.png';
import { motion } from 'framer-motion';

const Skills = () => {

    return (
        <section id='skills' className="skills py-5 px-3 p-lg-5">
            <div className='container m-0 px-3'>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <h2 className='title mb-4'>Skills</h2>
                    <div className='line-1 mb-4'></div>
                </motion.div>
                <div className="categories row">
                    <motion.div className="skill col-lg-4 col-md-6 col-12 p-3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <div className="skill-name p-4">
                            <FontAwesomeIcon icon={faCode} className='icon mb-5' />
                            <h6 className='mb-4'>
                                Programming Languages
                            </h6>
                            <div className='line mb-4'></div>
                            <div className='content g-4'>
                                <div className='d-flex mb-3'>
                                    <img src={c} alt='C' className='me-4' />
                                    <p>C</p>
                                </div>
                                <div className='d-flex mb-3'>
                                    <img src={cplus} alt='C++' className='me-4' />
                                    <p>C++</p>
                                </div>
                                <div className='d-flex mb-3'>
                                    <img src={js} alt='JavaScript' className='me-4' />
                                    <p>JavaScript</p>
                                </div>
                                <div className='d-flex mb-3'>
                                    <img src={php} alt='PHP' className='me-4' />
                                    <p>PHP</p>
                                </div>
                                <div className='d-flex mb-3'>
                                    <img src={python} alt='Python' className='me-4' />
                                    <p>Python</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="skill col-lg-4 col-md-6 col-12 p-3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <div className="skill-name p-4">
                            <FontAwesomeIcon icon={faLaptopCode} className='icon mb-5' />
                            <h6 className='mb-4'>
                                Front-end Development
                            </h6>
                            <div className='line mb-4'></div>
                            <div className='content g-4'>
                                <div className='d-flex mb-3'>
                                    <img src={html} alt='HTML' className='me-4' />
                                    <p>HTML</p>
                                </div>
                                <div className='d-flex mb-3'>
                                    <img src={css} alt='CSS' className='me-4' />
                                    <p>CSS</p>
                                </div>
                                <div className='d-flex mb-3'>
                                    <img src={sass} alt='Sass' className='me-4' />
                                    <p>Sass</p>
                                </div>
                                <div className='d-flex mb-3'>
                                    <img src={react} alt='React' className='me-4' />
                                    <p>React</p>
                                </div>
                                <div className='d-flex mb-3'>
                                    <img src={bootstrap} alt='Bootstrap' className='me-4' />
                                    <p>Bootstrap</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="skill col-lg-4 col-md-6 col-12 p-3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <div className="skill-name p-4">
                            <FontAwesomeIcon icon={faServer} className='icon mb-5' />
                            <h6 className='mb-4'>
                                Back-end Development
                            </h6>
                            <div className='line mb-4'></div>
                            <div className='content g-4'>
                                <div className='d-flex mb-3'>
                                    <img src={nodejs} alt='NodeJS' className='me-4' />
                                    <p>NodeJS</p>
                                </div>
                                <div className='d-flex mb-3'>
                                    <img src={expressjs} alt='ExpressJS' className='me-4' />
                                    <p>ExpressJS</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="skill col-lg-4 col-md-6 col-12 p-3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <div className="skill-name p-4">
                            <FontAwesomeIcon icon={faDatabase} className='icon mb-5' />
                            <h6 className='mb-4'>
                                Databases
                            </h6>
                            <div className='line mb-4'></div>
                            <div className='content g-4'>
                                <div className='d-flex mb-3'>
                                    <img src={sql} alt='SQL' className='me-4' />
                                    <p>SQL</p>
                                </div>
                                <div className='d-flex mb-3'>
                                    <img src={mysql} alt='MySQL' className='me-4' />
                                    <p>MySQL</p>
                                </div>
                                <div className='d-flex mb-3'>
                                    <img src={postgresql} alt='PostgreSQL' className='me-4' />
                                    <p>PostgreSQL</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="skill col-lg-4 col-md-6 col-12 p-3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <div className="skill-name p-4">
                            <FontAwesomeIcon icon={faScrewdriverWrench} className='icon mb-5' />
                            <h6 className='mb-4'>
                                Tools
                            </h6>
                            <div className='line mb-4'></div>
                            <div className='content g-4'>
                                <div className='d-flex mb-3'>
                                    <img src={git} alt='Git' className='me-4' />
                                    <p>Git</p>
                                </div>
                                <div className='d-flex mb-3'>
                                    <img src={github} alt='GitHub' className='me-4' />
                                    <p>GitHub</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="skill col-lg-4 col-md-6 col-12 p-3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <div className="skill-name p-4">
                            <FontAwesomeIcon icon={faPalette} className='icon mb-5' />
                            <h6 className='mb-4'>
                                Design
                            </h6>
                            <div className='line mb-4'></div>
                            <div className='content g-4'>
                                <div className='d-flex mb-3'>
                                    <img src={figma} alt='Figma' className='me-4' />
                                    <p>Figma</p>
                                </div>
                                <div className='d-flex mb-3'>
                                    <img src={canva} alt='Canva' className='me-4' />
                                    <p>Canva</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}

export default Skills;