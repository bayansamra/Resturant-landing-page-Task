import React, { Component } from 'react';
import search from '../../assets/search.png'
import line from '../../assets/line.svg'
import Button from '../Button'
import './style.css'
import Logo from '../Logo';


class Nav extends Component {
    state = {
        isNavShown: false
    }

    toogleNav = () => {
        this.setState({ isNavShown: !this.state.isNavShown })
    }

    render() {
        return (
        <nav className='nav'>
            <div>
                <Logo />
                <ul className="nav-ul only-large-screens">
                    <li className="nav-li"><a href="/#">Home</a></li>
                    <li className="nav-li"><a href="/#">About Us</a></li>
                    <li className="nav-li"><a href="/#">Special</a></li>
                    <li className="nav-li"><a href="/#">Menu</a></li>
                    <li className="nav-li"><a href="/#">Blogs</a></li>
                    <li className="nav-li">
                        <img src={search} alt="search" />
                    </li>
                </ul>
                <button className='only-mobile toogle-nav' onClick={this.toogleNav}>
                    <img src={line} alt="lines" />
                </button>
            </div>
            {
                this.state.isNavShown &&
                <ul className="nav-ul-mobile only-mobile">
                    <li className="nav-li" onClick={this.toogleNav}><a href="/#">Home</a></li>
                    <li className="nav-li" onClick={this.toogleNav}><a href="/#">About Us</a></li>
                    <li className="nav-li" onClick={this.toogleNav}><a href="/#">Special</a></li>
                    <li className="nav-li" onClick={this.toogleNav}><a href="/#">Menu</a></li>
                    <li className="nav-li" onClick={this.toogleNav}><a href="/#">Blogs</a></li>
                </ul>}
            <Button className="only-large-screens" secondary fullHeight>Book Now</Button>
        </nav>
        );
    }
}

export default Nav;