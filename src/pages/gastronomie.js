import React from "react"

import Layout2 from "../components/layout2"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

// import LeafletMap from '../components/leafletMap'
import Footer from '../components/footer'
import HeroGastro from '../components/hero-gastro'


const GastroPage = ({ data: {
  
header} }) => {

return (
  <Layout2>
    <SEO title="Home" />
    <div className="rinde">
      <HeroGastro image={header.childImageSharp.fluid}/>


    <section >
      {/* <span className="description"> */}
      {/* <h1 className="sub-titel">
      GASTRONOMIE
      </h1> */}
      
     
          </section>
          <section className="container ">

      <div>
        <h3 className="subber-titel">Restaurant "Zu den Zwei Raben"</h3>
        <p className="subPage-text">
        Das Restaurant wird bis zum geplanten Umbau vom Kloster Fahr selbst betrieben.
         Es besteht bereits eine enge Zusammenarbeit zwischen Fahr Erlebnis und dem Kloster.
          Geplant ist, dass die Fahr Erlebnis nach dem Umbau des Restaurants Betreiberin der gesamten Gastronomie wird. 
         </p>
      </div>
      <div >

      <button className="buttoni"><a href="https://www.kloster-fahr.ch/?page_id=115" target="_blank" rel="noopener noreferrer">Zu den Zwei Raben </a></button>

      </div>
      <div>
        <h3 className="subber-titel">Fährigarten</h3>
        <p className="subPage-text">Der familiäre Fährigarten, welcher zum Restaurant «Zu den Zwei Raben» gehört, öffnet sobald es die Pandemiesituation erlaubt und lädt Wanderer und Wanderinnen, Familien, Velofahrer und Velofahrerinnen und weitere Gäste zum Verweilen ein.</p>
      </div>
    </section>

    <Footer/>
    </div>

</Layout2> 

)

}

// export const fluidImage = graphql`
//   fragment fluidImage on File {
//     childImageSharp {
//       fluid(maxWidth: 1600) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `;

export const pageQuery = graphql`
  query {
    header: file(relativePath: { eq: "gastro_fahr.jpg" }) {
      ...fluidImage
    }
    coffeePortrait: file(relativePath: { eq: "Flugaufnahme-web.jpg" }) {
      ...fluidImage
    }
    latte: file(relativePath: { eq: "land3.jpg" }) {
      ...fluidImage
    }
    coffeeBags: file(relativePath: { eq: "kids_haas_web.jpg" }) {
      ...fluidImage
    }
  }
`;

export default GastroPage
