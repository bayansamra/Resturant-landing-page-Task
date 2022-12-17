import React from 'react'
import Nav from '../../components/Nav'
import headerBg from '../../assets/header-bg.png'
import './style.css';
import Container from '../../components/Container';
import Button from '../../components/Button';

const Header = () => {
    return (
        <div className='header' style={{ backgroundImage: `url(${headerBg})` }}>
            <Container>
                <Nav />
                <div className="header-content">
                    <h1>Welcome To <br />Golden View Dine </h1>
                    <p>Explore the authentic vegan dishes with your friends and family</p>
                    <Button>Read more</Button>
                </div>
                <div className="header-bottom-shadow"></div>
            </Container>
        </div>
    )
}

export default Header