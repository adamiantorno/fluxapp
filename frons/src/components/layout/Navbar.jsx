import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './navbar.scss';

import { Search } from './Search';
import { 
    BsGear, 
    BsGraphUp, 
    BsAward, 
    BsFillCaretDownFill, 
    BsPerson, 
    BsBoxArrowLeft 
} from "react-icons/bs";
import Ppic from './profilepic.png'


export const Navbar = ({pic_src, username, ...props}) => {
    return (
        <nav className="header">
            <div className="navbar-nav df">
                <div className="navbar-title">
                    <h1>FLUX</h1>
                </div>
                <div className="navbar-search">
                    <Search placeholder="Search Flux..."></Search>
                </div>
                <div className="navbar-items df">
                    <ul className="navbar-list">
                        <NavItem icon={<BsGraphUp />} hover={<NavHover title="Progress" />} />
                        <NavItem icon={<BsAward />} hover={<NavHover title="Rankings" />} />
                        <NavItem icon={<BsFillCaretDownFill />} hover={<NavHover title="Settings" />}>
                            <DropdownMenu username={username}/>
                        </NavItem>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


const NavItem = (props) => {

    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    return (
        <li className="nav-item"> 
            <a href="#" className="icon-link df" 
            onClick={() => {setOpen(!open); setShow(false)}}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}>
                {props.icon}
            </a>

            {open && props.children}
            {(show && !open) && props.hover}
        </li>
    );
};

const NavHover = (props) => {
    return (
        <div className="hover">
            <p>{props.title}</p>
        </div>
    );
};

const DropdownMenu = (props) => {

    const DropdownItem = (props) => {
        return (
            <a href="" className="menu-item">
                <span className="drop-icon">{props.leftIcon}</span>
                {props.children}
            </a>
        )
    }

    return (
        <div className="dropdown">
            <div className="account-info">
                <img src={Ppic} alt="Profile Pic" className="profile-pic" />
                <h3>{props.username}</h3>
            </div>
            <hr />
            <DropdownItem leftIcon={<BsPerson />}>My Profile</DropdownItem>
            <DropdownItem leftIcon={<BsGear />}>Settings</DropdownItem>
            <DropdownItem leftIcon={<BsBoxArrowLeft />}>Logout</DropdownItem>
        </div>
    );
};


Navbar.PropTypes = {
    username: PropTypes.string,
    pic_src: PropTypes.string
}

Navbar.defaultProps = {
    username: 'username',
    pic_src: '../../../assets/img/profilepic.png'
}