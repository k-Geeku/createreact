import React , {useState , useEffect} from 'react'
import styled from 'styled-components'
import hero from '../assets/hero.svg'
import {NavLink} from 'react-router-dom';
import { Button } from '../Styled/Button';
import Footer from '../Styled/Footer';


const Services = () => {
  const Wrapper = styled.section`
  .card{
    border:2px solid ${({theme})=>theme.colors.border};
    border-radius:12px;
    .m-auto{
      border-radius:13px;
    }
    .img{
        
      border-radius:12px;
      
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-item:center;
      width:70%;
      margin:auto;
      margin-top:4rem;
      margin-bottom:2rem;
      img{
       border-radius:12px;

      }
    }
    .desc{
      padding-right:2rem;
      padding-left:2rem;
    }
  }
  
  
  `;
  const [data,setdata] =  useState([]);
 
  const getUsers = async()=>{
    const URL = "https://ashuapi.herokuapp.com/data";
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data.id);
    setdata(data);
    
  }

  useEffect(() => {
   getUsers();    
   
  }, [])
  return (
    <Wrapper>

   <center> <h1 style={{marginTop:'9rem',marginBottom:'9rem'}}>Our Services</h1> </center>

   
    <div className="container grid grid-three-column">
      
      {  data.map((e)=>{

        return(
          <>
          
         
    
        <div className="card" key={e.id} >
     <div className="img">
     
     <center>
     <img src={e.image} alt="Error" width={"230px"} height={"230px"}/></center>
     <figcaption style={{textAlign:"center",fontSize:"3rem",fontWeight:'900',paddingBottom:'2px'}}>{e.title}</figcaption>
     </div> 
     <div className="desc" style={{textAlign:"center",fontSize:"2rem",fontWeight:'300'}}>
          {e.description}
     </div>
   ;
    <Button className="btn sec hireme-btn center m-auto"><NavLink to="/contact" style={{color:"white"}}>Know more</NavLink></Button>

     
     </div> 


     
          
         
          </>

        )
      
        
        
        })
  
      }
      </div>
      
      
    </Wrapper>
  )
}

export default Services