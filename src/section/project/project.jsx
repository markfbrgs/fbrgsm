import React, { useState } from 'react';
import './project.scss';
import gearup from '../../assets/icons/gearup.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../component/modal/modal';

const Project = () => {
    const [showIcon, setShowIcon] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <section id='project' className="project py-5 px-3 p-lg-5">
            <div className='container m-0'>
                <h2 className='mb-4'> Projects</h2>
                <div className='line mb-4'></div>
                <div className='row'>
                    <div className="col col-lg-4 col-12 p-3">
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
                    </div>
                    <div className="col col-lg-4 p-3">
                        <div className='project-card p-4 none'>
                        </div>
                    </div>
                    <div className="col col-lg-4 p-3">
                        <div className='project-card p-4 none'>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
        </section>
    );
} 

export default Project;