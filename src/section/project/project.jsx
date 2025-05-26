import React, { useState } from 'react';
import './project.scss';
import gearup from '../../assets/icons/gearup.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../component/modal/modal';
import { motion } from 'framer-motion';

const Project = () => {
    const [showIcon, setShowIcon] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <section id='project' className="project py-5 px-3 p-lg-5">
            <div className='container m-0'>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <h2 className='title mb-4'>Projects</h2>
                    <div className='line-1 mb-4'></div>
                </motion.div>
                <div className='row'>
                    <motion.div className="col col-lg-4 col-12 p-3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <div className='project-card'>
                            <div className='project-img'
                                onMouseEnter={() => setShowIcon(true)}
                                onMouseLeave={() => setShowIcon(false)}
                                onClick={() => setShowModal(true)}>
                                <img
                                    src={gearup}
                                    alt='GearUp'
                                />
                                <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}
                                    className={`icon ${showIcon ? 'opacity-100' : 'opacity-0'} `}
                                />
                            </div>
                            <div className='project-desc p-4'>
                                <h6 className='mb-4'>
                                    GearUp
                                </h6>
                                <p className='mb-4'>A web application for bike shop management and custom bike building.</p>
                                <button className='view-project p-0 m-0' onClick={() => setShowModal(true)}>
                                    View Project
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ms-2 fs-6' />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="col col-lg-4 p-3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.5 }}>
                        <div className='project-card p-4 none'>
                        </div>
                    </motion.div>
                    <motion.div className="col col-lg-4 p-3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.5 }}>
                        <div className='project-card p-4 none'>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
        </section>
    );
}

export default Project;