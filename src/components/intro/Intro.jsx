import React from 'react'
import './Intro.css'
import { Link } from 'react-scroll'
import hireme from '../../assets/briefcase.png'
import bg from '../../assets/video-calling.png'

const Intro = () => {
  return (
   <section id='intro' >
    <div className="introContent">
        {/* <span className='hello'>Hello,</span> */}
        {/* <span className='introText'>I'm  */}{/* </span> */}
        <span className='introName'>Beth<br></br> HOU</span> 
        
        <span className='introOcc'> Data Analyst | Web Developer</span>
        <p className="introPara">I am a skilled web developer with exdperience in creating web and <br />visually appearling and user-friendly websites.</p>
        {/* <button></button> */}
        {/* <br></br> */}
        {/* <Link to='contact' smooth={true} duration={500}> */}
        <a href="mailto:your.email@example.com">
          <button className='btn'>
            <img src={hireme} alt="Hire Me" className='btnImg' />
            <span>Hire Me</span>
          </button>
        </a>
          {/* </Link> */}
    </div>
    <img src={bg} alt="Profile" className='bg'/>
   </section>
  )
}

export default Intro