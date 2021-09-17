import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';
import {NavLink as Link} from "react-router-dom";

export const Nav = styled.nav`
    background: white;
    height: 80px;
    display: flex;
    // 3rd Nav comment line below
    //justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    border: 1px solid #d6d6c2;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    
//    3rd Nav
     justify-content: flex-start;
`;

export const NavLink = styled(Link)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &.active {
        color: #15cdfc;
    }
    
    &:hover {
        text-decoration: none;
    }
`;

export const LogoImg = styled.img`
    width: 150px;
    border-radius: 5px;
    
    @media screen and (max-width: 500px) {
        width: 140px;
    }
    @media screen and (max-width: 400px) {
        width: 130px;
    }
     @media screen and (max-width: 350px) {
        width: 110px;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: black;
    
    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 57%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div `
    display: flex;
    align-items: center;
    margin-right: -24px;
    
    
    //3rd Nav
     width: 100vw;
     white-space: nowrap;
    
    @media screen and (max-width: 760px) {
       display: none;
    }
`;

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    
     //3rd Nav
      justify-content: flex-end;
      width: 100vw;
    
     @media screen and (max-width: 760px) {
      display: none;
     }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background #fff;
        color: #010606;
        text-decoration: none;
    }
`;
