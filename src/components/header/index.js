import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../images/CodeusHRLogo.png';
import {LogoImg, NavBtnLink} from "./Header.styles";
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     NavbarText
// } from 'reactstrap';


const Header = (props) => {
    // const [isOpen, setIsOpen] = useState(false);
    //
    // const toggle = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'><LogoImg src={Logo} alt='img-logo'/></Link>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/login'>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/sign-up'>Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    // {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
    // {/*        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"*/}
    // {/*        aria-label="Toggle navigation">*/}
    // {/*    <span className="navbar-toggler-icon"></span>*/}
    // {/*</button>*/}

        // <div>
        //     <Navbar color="light" light expand="md">
        //         <NavbarBrand href="/"><LogoImg src={Logo} alt='img-logo'/></NavbarBrand>
        //         <NavbarToggler onClick={toggle} />
        //         <Collapse isOpen={isOpen} navbar>
        //             <Nav className="mr-auto" navbar>
        //                 <NavItem>
        //                     <NavLink href="/login">Login</NavLink>
        //                 </NavItem>
        //                 <NavItem>
        //                     <NavLink href="/about">About</NavLink>
        //                 </NavItem>
        //             </Nav>
        //             <NavbarText>
        //                 <NavBtnLink to='/sign-up'>Sign Up</NavBtnLink>
        //             </NavbarText>
        //         </Collapse>
        //     </Navbar>
        // </div>
    );
};

export default Header;