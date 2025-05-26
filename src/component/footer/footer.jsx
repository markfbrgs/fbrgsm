import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">

            <div className='faded-border'></div>
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <p className="mb-0 px-3 px-lg-5 py-4">© 2025 Mark Fabregas. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;