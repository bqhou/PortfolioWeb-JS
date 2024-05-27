import React from 'react'
import './Works.css'
import game from '../../assets/video-game.png'
import onlineshop from '../../assets/cyber-monday.png'
import ps from '../../assets/photo-editing.png'
import news from '../../assets/news.png'
import code from '../../assets/coding.png'
import music from '../../assets/listening.png'

const Works = () => {
  return (
    <section id='works'>
      <h2 className="worksTitle">About Me</h2>
      <span className="worksDesc">Hello there, I am
        <span className="worksjob"> Beth</span>. I am a skilled 
          <span className="worksjob"> Data Analyst & Web Developer </span>
          based in 
          <span className="worksjob"> Greater Boston</span>
           . My dual skill set allows me to approach problems from both technical and analytical perspectives, providing comprehensive solutions.
      </span>

      <div className="worksImgs">
          <div className='job'>
                <img src={news} alt="" className="worksImg" />
                <span className="worksDesc2">
        I have a strong background in data analysis, where I play with data using python, Tableau and SQL. and excel in extracting insights from data to drive business decisions.
        </span>
          </div>

          <div className='job'>
          <img src={code} alt="" className="worksImg" />
          <span className="worksDesc2">
        I specialize in creating visually appealing, user-friendly and high-performance web applications. My expertise mainly focus on front-end development, utilizing JavaScript and React.js.
         
        </span>

          </div>
            

          
          
      </div>

       
     
        
      
        
        {/* <button className='workBtn'>See More</button> */}
    </section>
  )
}

export default Works