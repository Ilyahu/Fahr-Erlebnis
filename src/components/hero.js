// import React from 'react'
// import Img from 'gatsby-image'

// import companyThumbnail from "../images/fahr_erlebnis_weiss_transparent.png"


// const Hero = ({ image, title="Fahr Erlebnis", subtitle="Auf dem Kloster Fahr Areal was erleben" }) => {
//     return (
//         <section className="hero">
//             <div className="hero-description">
//             <img
//                 src={companyThumbnail}
//                 alt="Company Thumbnail"
//                 className="img-head"
//               />    
//                 <h1>{title}</h1>
//                 <h2>{subtitle}</h2>
//             </div >
           

//             {image && (
//                 <Img fluid={image} className="hero-image"/>
//             )}


         
//         </section>
//     )
// }

// export default Hero;

import React from "react"
import { Container } from "reactstrap"
import { Link } from "gatsby"
import defaultHero from '../images/fahr_erlebnis_weiss_transparent.png';

import "../styles/components/hero.scss"

import companyThumbnail from "../images/fahr_erlebnis_weiss_transparent.png"


const Hero = ({
    title="Fahr Erlebnis",
    subtitle="Die Erlebnis Oase im Limmattal",
    image,
    fullScreen=false
}) => {
    console.log(image)

  return (
    <div
      className="hero"
      id="hero"
      style={{
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        background: `linear-gradient( rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.11) ), 
        url(${image?.src})`, height: fullScreen ? '100vh' : '70vh' 
      }}
    >
      <section className="h-100 d-flex align-items-center text-center bg-dark-100">
        <Container>
        <img
            src={companyThumbnail}
            alt="Company Thumbnail"
            className="img-head-home"
        />  
          <main className="hero-content">
          <h1 className="title">{title}</h1>
            

          <p className="hero-subber">{subtitle}</p>
          </main>
        </Container>
      </section>
    </div>
  )
}

export default Hero
