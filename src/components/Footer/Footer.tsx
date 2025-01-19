import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <h1 className='footer-heading'> LearnHub</h1>
            <p className='copyright'>© 2022 Tailwind Labs Inc. All rights reserved.</p>
            <div className="footer-links" style={{display: 'flex', justifyContent: 'center', gap: '10px', margin: '20px', fontSize: '14px'}}>
                <Link to="/form">Form</Link>
                <p>|</p>
                <Link to="/Note">Note</Link>
            </div>
        </div>
    </div>
  );
}

export default Footer;