import React from 'react';
import { NavLink } from 'react-router-dom';
import {MdHome, MdPermIdentity,MdWork,MdMailOutline,MdComputer} from "react-icons/md"
import '../Styles/NavBar.css';

const NavBar = () => (
    <nav className="navBar">
        <NavLink 
            exact
            activeClassName="navBar__link-active"
            className="navBar__link"
            to="/"
        >
            <MdHome size="20px" style={navBarIcon}/>
            Home
        </NavLink>
        <NavLink 
            exact
            activeClassName="navBar__link-active"
            className="navBar__link"
            to="/about"
        >
            <MdPermIdentity size="20px" style={navBarIcon}/>
            About
        </NavLink>
        <NavLink 
            exact
            activeClassName="navBar__link-active"
            className="navBar__link"
            to="/skills"
        >
            <MdComputer size="20px" style={navBarIcon}/>
            Skills
        </NavLink>
        <NavLink 
            exact
            activeClassName="navBar__link-active"
            className="navBar__link"
            to="/projects"
        >
            <MdWork size="20px" style={navBarIcon}/>
            Projects
        </NavLink>
        <NavLink 
            activeClassName="navBar__link-active"
            className="navBar__link"
            to="/contact"
        >
            <MdMailOutline size="20px" style={navBarIcon}/>
            Contact
        </NavLink>

    </nav>
);

export default NavBar;

const navBarIcon = {
    verticalAlign:"middle",
    padding:"0px 10px",
    paddingBottom:"3px",
};