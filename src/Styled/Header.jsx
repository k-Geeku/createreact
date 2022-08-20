import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import reactLogo from '../assets/vite.svg'



const Header = () => {

 

  return (
   <MainHeader>
      <div className="logo">
      <picture>
      <img src={reactLogo} alt="INDIAN" />
      <figcaption>DEV</figcaption>
      </picture>
      </div>
      <div className="navmenu">
      <ul className="list">
        
        <li><NavLink className="list1" to = {'/'}>Home</NavLink></li>
        <li><NavLink className="list1" to = {'/serv'}>Services</NavLink></li>
        <li><NavLink className="list1" to = {'/contact'}>Contact</NavLink></li>
        <li><NavLink className="list1" to = {'/about'}>About</NavLink></li>
      </ul>
      
      </div>
   </MainHeader>
  )
};
const MainHeader = styled.header`

padding:0 4.8rem;
height:10rem;
background-color:${({theme})=>theme.colors.bg};
display:flex;
justify-content:space-between;
align-items:center;
.logo{
  text-align:center;
}
  li{
    list-style:none;
  }
   
    .list{
    display:flex;
    gap:4.8rem;

  }
     .list1{
      text-transform:uppercase;
      text-decoration:none;
      color:${({theme})=>theme.colors.text};
      font-weight:400;
      &:hover,
      &:active{
        color:${({theme})=>theme.colors.helper};
        // transition:color 0.3s linear

        // font-weight:100;

      }
      &:link,&:visited{
        display : inline-block;
        text-decoration:none;
        font-size:1.8rem;
        // color:${({theme})=>theme.colors.helper};
        transition:color 0.3s linear

      }

    }


`;

export default Header