import React, {useState} from 'react';

import Logo from '../../images/CodeusHRLogo.png';
import {LogoImg, NavBtnLink} from "./Header.styles";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><LogoImg src={Logo} alt='img-logo'/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <NavBtnLink to='/sign-up'>Sign Up</NavBtnLink>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;