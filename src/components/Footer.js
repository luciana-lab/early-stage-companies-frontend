import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';

const Footer = () => {
    return (
        <footer>
            <small>&copy; 2021 <strong>1 Million Cups Dripper.</strong> All Rights Reserved.</small>
            <div><small>1 Million Cups belongs to <Link to="https://www.1millioncups.com/">Ewing Marion Kauffman Foundation</Link>.</small></div>
        </footer>

    )
}

export default Footer;