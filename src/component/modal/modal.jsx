import React from "react";
import './modal.scss'
import gearup from '../../assets/icons/gearup.png';
import CancelIcon from '@mui/icons-material/Cancel'

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay px-4">
            <div className="modal-content">
                <div className='project-img'>
                    <CancelIcon
                        className="close-btn"
                        onClick={onClose}
                    />
                    <img
                        src={gearup}
                        alt='GearUp'
                    />
                </div>
                <div className="project-desc p-4">
                    <h6 className="mb-3">Gear Up</h6>
                    <p className="m-0">
                        GearUp is a bike shop management system that allows admins to monitor inventory levels, track sales and expenses, and manage user accounts. It enables staff to record sales and daily expenses, while customers can design bicycles using a custom bike builder that ensures part compatibility based on their selections.
                    </p>
                </div>
                <div className="project-tech pb-4 px-4">

                    <div className="tech-list wrap d-flex flex-wrap">
                        <span className="tech-item px-3 py-1 m-1">React</span>
                        <span className="tech-item px-3 py-1 m-1">Node.js</span>
                        <span className="tech-item px-3 py-1 m-1">Express.js</span>
                        <span className="tech-item px-3 py-1 m-1">PostgreSQL</span>
                        <span className="tech-item px-3 py-1 m-1">HTML5</span>
                        <span className="tech-item px-3 py-1 m-1">CSS3</span>
                        <span className="tech-item px-3 py-1 m-1">SASS/SCSS</span>
                        <span className="tech-item px-3 py-1 m-1">JavaScript</span>
                        <span className="tech-item px-3 py-1 m-1">Bootstrap</span>
                        <span className="tech-item px-3 py-1 m-1">Git</span>
                        <span className="tech-item px-3 py-1 m-1">Github</span>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}


export default Modal;