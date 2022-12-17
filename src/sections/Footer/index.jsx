import React from 'react'
import Container from '../../components/Container'
import Grid3Columns from '../../components/Grid3Columns'
import Logo from '../../components/Logo'

import instgram from '../../assets/instgram.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import email from '../../assets/email1.png'
import GPS from '../../assets/GPS.png'
import phone from '../../assets/phone.png'

import './style.css'
const Footer = () => {
    return (
        <footer>
            <Container>
                <Grid3Columns>
                    <div className='footer-1'>
                        <div className='footer-1-header'>
                            <Logo />
                            <p>Golden View Dine</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet,
                             consectetur adipiscing elit. Sollicitudin</p>
                        <div className='social-icons'>
                            <img src={instgram} alt="instgram" />
                            <img src={twitter} alt="twitter" />
                            <img src={youtube} alt="youtube" />
                        </div>
                    </div>
                    <div className='footer-2'>
                        <p className="footer-title">Other Links</p>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms & conditions</li>
                            <li>Blogs</li>
                            <li>our team</li>
                            <li>Our kitchen</li>
                        </ul>
                    </div>
                    <div className='footer-3'>
                        <p className="footer-title">Contact Us</p>
                        <p>
                            <img src={email} alt="email" /> Gogreendineservice@gmail.com
                        </p>
                        <p>
                            <img src={GPS} alt="gps" /> AZ complex bylane3 Mandari Rd Mumbai 1100867
                        </p>
                        <p>
                            <img src={phone} alt="email" /> +1800 287 256
                        </p>
                    </div>
                </Grid3Columns>
            </Container>
        </footer>
    )
}

export default Footer