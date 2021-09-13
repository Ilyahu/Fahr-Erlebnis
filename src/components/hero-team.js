import React from 'react'
import Img from 'gatsby-image'

import companyThumbnail from "../images/fahr_erlebnis_weiss_transparent.png"


const HeroTeam = ({ image, title="Das Team"}) => {
    return (
        <section className="hero">
            <div className="hero-description">
            <img
                src={companyThumbnail}
                alt="Company Thumbnail"
                className="img-head"
              />    
                <h1>{title}</h1>
            </div >
           

            {image && (
                <Img fluid={image} className="hero-image"/>
            )}


         
        </section>
    )
}

export default HeroTeam;
