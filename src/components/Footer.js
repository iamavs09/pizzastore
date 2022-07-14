import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';


import '../styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className="box1">
        © Copyright, AVS
        </div>
        {/* <div className="box1"> */}
          {/* <input type="email" name="" id="" /> */}
          {/* <button className='btn'>send mail</button>
        </div> */}
        <div className="box1">
        
        <FacebookIcon className='icon'/>
        <InstagramIcon className='icon'/>
        <LinkedinIcon className='icon'/>
        </div>
        <div className="box1">call us
        <br />7651816150
        </div>
       
        
    </div>
  )
}

export default Footer