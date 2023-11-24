import React from 'react'
import IMG1 from '../assests/portfolio1.jpg'
import IMG2 from '../assests/portfolio2.jpg'
import IMG3 from '../assests/portfolio3.jpg'
import IMG4 from '../assests/portfolio4.jpg'
import IMG5 from '../assests/portfolio5.png'
const Portfolio = () => {
  return (
    <section id="portfolio">
    <h5>My Recent Work </h5>
    <h2>Portfolio</h2>
    <div className="container portfoilo_container">
      <article className="portfolio_item">
        <div className="portfolio_item-image">
        <img src={IMG1} alt="" />
        </div>
          <h3>Lorem ipsum dolor sit.</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='blank'>Live Demo</a>
        
          </div>
      </article>
      <article className="portfolio_item">
        <div className="portfolio_item-image">
        <img src={IMG1} alt="" />
        </div>
          <h3>Lorem ipsum dolor sit.</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='blank'>Live Demo</a>
        
          </div>
      </article>
      <article className="portfolio_item">
        <div className="portfolio_item-image">
        <img src={IMG1} alt="" />
        </div>
          <h3>Lorem ipsum dolor sit.</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='blank'>Live Demo</a>
        
          </div>
      </article>
      
    </div>
    </section>
  )
}

export default Portfolio