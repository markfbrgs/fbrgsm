import React from 'react';
import './contact.scss';
import ChatIcon from '@mui/icons-material/Chat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section id='contact' className="contact py-5 px-4">
            <div className='container m-0 d-flex flex-column justify-content-center align-items-center'>
                <ChatIcon className='chat-icon mb-5' />

                <h2 className='title mb-4'>Get in touch.</h2>
                <p className='mb-5 mx-4 mx-lg-5 text-center'>I'm always open to discussing new projects, exploring creative ideas, or collaborating on opportunities where I can contribute meaningfully to your vision and bring value to your goals.</p>
                <a
                    href="https://m.me/mfbrgs"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="contact-btn py-2">
                        Contact Me
                    </button>
                </a>
            </div>
            <FontAwesomeIcon
                icon={faCircleChevronUp}
                onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
                className='icon mt-5'
            />
        </section>
    );
}

export default Contact;