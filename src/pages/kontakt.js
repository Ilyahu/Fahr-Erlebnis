import React from "react"
import { Container, Row, Col } from 'reactstrap'

import Layout2 from "../components/layout2"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import HeroKontakt from '../components/hero-kontakt'
import ContactForm from '../components/contact'


import Footer from '../components/footer'

import '../styles/pages/kontakt.scss'

const KontaktPage = ({ data: {
kontakt} }) => {

return (
  <Layout2>
    <SEO title="Kontakt" />

    <div className="rinde">
      <HeroKontakt image={kontakt.childImageSharp.fluid} />
      <Container style={{ height: 'auto' }}>
        <Row>
          <Col>
            <section>
              <h1 className="subber-titel">
                Kontaktformular
              </h1>
              <div>
                <p className="subPage-text">Haben Sie Fragen zu unserem Projekt oder zu einzelnen Angeboten?<br></br> Zögern Sie nicht uns zu kontaktieren!</p>
              </div>
            </section>
            <ContactForm className="contact-form"/>
          </Col>
        </Row>
        <Row>
          <Col>
          <section>
            <br></br><br></br>
              <h1 className="subber-titel">
              Anreise
              </h1>
              <div>
                <p className="subPage-text">Machen Sie die Anreise zu uns bereits zum Erlebnis und geniessen Sie das schöne Flussufer auf dem Velo oder zu Fuss.<br></br> Unterwegs an der Limmat lässt sich jederzeit eine kleine Pause einlegen, um die Idylle auf sich wirken zu lassen.
                
                <br></br> 
                
                </p>
                <br></br>
                <h1 className="subber-titel">
                ÖV & Zu Fuss
                </h1>
                <p className="subPage-text">
                  <strong>Bushaltestelle:</strong> <br></br>Unterengstringen Langwisen (Bus 302, 308) oder Eckstein
Fussweg der Limmat entlang ca. 15 Minuten am Fahr-Fischerhüsli vorbei.
<br></br><br></br>
<strong>S-Bahn Haltestelle:</strong><br></br>
Glanzenberg
Fussweg der Limmat entlang ca. 25 Minuten

                </p>
                <br></br>
                <h1 className="subber-titel">
                  Velo
                </h1>
                <p className="subPage-text">

                Von Zürich her kann man die <a href="https://www.schweizmobil.ch/de/veloland/routen/route/etappe-01480.html"> Schweiz Mobil Veloroute 66</a> nehmen. 
               <br></br><br></br>
              Von Dietikon Zentrum her der Limmat entlang über den Glanzenberger Steg zum Pontonierweg über die Chlosterstrasse ca. 12 Minuten
              <br></br><br></br>
              Vom Zentrum Schlieren her über die Engstringerstrasse zur Weinigerstrasse, den Fluss überqueren, dann links abbiegen dem Werdbach entlang ca. 8 Minuten
                </p>
                <br></br>
                <h1 className="subber-titel">
                  Auto
                </h1>
                <p className="subPage-text">

                Von Engstringen her den Schildern Kloster Fahr folgen.
                <br></br><br></br>

                Von Schlieren und Dietikon her auf der Überlandstrasse dem Schild Kloster Fahr folgen.
                </p>
              </div>
            </section>
              </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
    
</Layout2> 

)}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    kontakt: file(relativePath: { eq: "Detailseite-Header-Kontakt_web.jpg" }) {
      ...fluidImage
    }
    
  }
`;

export default KontaktPage
