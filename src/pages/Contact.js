import React from 'react';
import "../styles/Contact.css"

function Contact() {
  return (
    <div className='contact'>
        <h1 className='heading'>Contact us</h1>
        <div className="container">
            <div className="imgcontainer"></div>
            <div className="textcontainer">
                <input className='inputtext' type="text" placeholder='Type your text here' />
                <button>Mail</button>
            </div>
        </div>
    </div>
  )
}

export default Contact;