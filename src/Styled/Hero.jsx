import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './Button';
import hero from '../assets/hero.svg';

const Hero = ({name,image}) => {
    const Wrapper = styled.section`
    padding:9rem 0;

    .section-hero-data{
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    .btn{
        max-width:16rem;
    }
    .hero-top{
        text-transform:uppercase;
        font-weight:500;
        color:${({theme})=>theme.colors.helper};
    }
    picture{
        text-align:center;
    }
       

    `;
  return (
    <Wrapper>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <p className='hero-top'>Hi , all my dear freinds</p>
                <h1 className='hero-head'>{name}</h1>
                <p  className='hero-para'>
                I am Ashutosh Jha. MERN developer and a student of Indira Gandhi National Open University.</p>
            
            
                <Button className="btn hireme-btn"><NavLink to="/contact" style={{color:"white"}}>Hire me</NavLink></Button>
                
            </div>
            <div className="section-hero-image">
            <picture>
            <img src={image} alt="Error" width={'702px'}/>
            </picture>
            </div>
        </div>
    </Wrapper>
  )
}

export default Hero