import React from 'react'
import  './Skills.css'
import vis from '../../assets/infographic.png'
import app from '../../assets/restaurant-app.png'
import web from '../../assets/edit.png'

const Skills = () => {
  return (
    <section id='skills'>
          <span className="skillTitle">What I do</span>
          <span className="skillDesc">I have been working on some projects related data analytics, web development and MObile App. Please click on it to check the profolio</span>

          <div className="skillBars">
              <div className="skillBar">
                  <img src={vis} alt="Vis" className="skillBarImg" />
                  <a className="skillBarText" href='https://github.com/bqhou/ML1_Python' target="_blank" rel="noopener noreferrer">
                      <h2>Data Analytics & Visualization</h2>
                      <p>Programing: Python, SQL, Tableau</p>
                  </a>
              </div>
          </div>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={web} alt="web" className="skillBarImg" />
                    <a className="skillBarText" href='https://github.com/bqhou/react-admin' target="_blank" rel="noopener noreferrer">
                        <h2>Website Development</h2>
                        <p>Programing: JS, HTML, CSS, React JS, Redux</p>
                    </a>
                </div>
            </div>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={app} alt="app" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Development</h2>
                        <p>Programing: JS, HTML, CSS, React JS, Redux</p>
                    </div>
                </div>
            </div>
        
    </section>
  )
}

export default Skills