import React from "react"
import { Parallax } from "react-parallax"

import { Container, Row, Col } from "reactstrap"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { parseOptions } from '../utils/praseOptions';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { graphql, Link } from 'gatsby'
import MenuErlebnisse from '../components/menu/menu'
import AktuellMessage from '../components/aktuellMessage'
import LeafletMap from '../components/leafletMap'
import Footer from '../components/footer'
import useWindowSize from '../utils/useWindowsSize'

import Parallax1 from '../images/Fahr-Erlebnisse_web.jpeg'
import Parallax1Mobile from '../images/bub_mobile.jpg'

import Parallax2 from '../images/hofladen_fahr-erlebnis.jpeg'
import Parallax2Mobile from '../images/parallax2-mobile.jpg'

import Parallax3 from '../images/_AD_7161_rgb.jpg'
import Parallax3Mobile from '../images/parallax3-mobile.jpg'

import Parallax4 from '../images/Landing_Trotte_AD_6512_rgb.jpg'
import Parallax4Mobile from '../images/parallax4-mobile.jpg'

import Parallax5 from '../images/Gastronomie_fahr-erlebnis.jpeg'
import Parallax5Mobile from '../images/parallax5-mobile.jpg'

import Parallax6 from '../images/Landing_uberUns_rgb_webs.jpg'
import Parallax6Mobile from '../images/parallax6-mobile.jpg'

import Parallax7 from '../images/Fahr-erlebnis_erleben.jpeg'
import Parallax7Mobile from '../images/parallax7-mobile.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const IndexPage = ({ data: {
  coffeeShop,
  allContentfulContainerTexteHomepage,
  allContentfulAktuell,
  allContentfulAktuellNew
}}) => {
  const content = allContentfulContainerTexteHomepage?.nodes?.[0]
  const { width } = useWindowSize()

  return (
    <Layout>
    <SEO title="Home" />
    
    <Hero fullScreen subtitle="Die Erlebnis-Oase im Limmattal" image={coffeeShop.childImageSharp.fluid} />

    {allContentfulAktuellNew?.nodes && (
      <AktuellMessage {...allContentfulAktuellNew?.nodes[0]} />
    )}

    <Container style={{ marginTop: '60px' }}>
      <Row>
        <Col xl="12" lg="12">
          <p className="aktuell">Aktuell: {allContentfulAktuell?.nodes?.[0]?.aktuell} </p>
          <br></br>
          <p className="cont-desc">
          Das eindrückliche Klosterareal liegt an märchenhafter Flussidylle und lädt als Oase zum Verweilen ein. 
          Das Limmattal zwischen Zürich und Baden wurde durch die Gründung des Klosters Fahr im Jahr 1130 und dessen Entwicklung zunehmend geprägt. 
          Die Klosteranlage gehört zum Kloster Einsiedeln und ist eine vollständig von Zürcher Boden umschlossene Exklave des Kantons Aargau.
          Rund zwanzig Frauen bewohnen das Kloster, die ihr Leben nach den Regeln des heiligen Benedikt gestalten.
             <br></br><br></br>
             Der Name "Kloster Fahr" leitet sich von der Fähre ab, die an diesem Ort über die Limmat führte und dies an schönen Sonntagen und Festtagen noch immer tut. 
<br></br>
Wir freuen uns, an diesem geschichtsträchtigen Ort neu den Landwirtschaftsbetrieb zu führen. 
Durch unser vielseitiges Erlebnisangebot möchten wir Tiere und Landwirtschaft für Gross und Klein erlebbar machen. 
Sie sind herzlich eingeladen, unsere lebendige und wissensvermittelnde Oase an der Limmat zu besuchen. Bei uns erleben Sie etwas! 
<br></br><br></br>
Ihr Fahr Erlebnis Team.

          </p>
        </Col>
      </Row>
    </Container>

    <Parallax
      strength={300}
      className="react-parallax"
      bgImage={width < 768 ? Parallax1Mobile : Parallax1}
      bgImageAlt='Aktuell'
    />

    {/* <div className="parallax1"></div> */}

    <MenuErlebnisse />

    {/* <div className="parallax2"></div> */}

    <Parallax
      strength={300}
      className="react-parallax"
      bgImage={width < 768 ? Parallax2Mobile : Parallax2}
      bgImageAlt='Aktuell'

    />

    <Container>
      <Row>
        <Col xl="6" lg="6">
        <h2 > <a className="titel-link" href="https://fahr-hofladen.ch"  rel="noopener noreferrer"> HOFLADEN </a>  </h2>
        </Col>
        
        <Col xl="6" lg="6">
          <p className="cont-desc">
            {documentToReactComponents(content.hofladenText.json, parseOptions)}
          </p>
          <a className="menu-link" href="https://fahr-hofladen.ch"  rel="noopener noreferrer">zum Hofladen</a>
        </Col>
      </Row>
    </Container>
        
    {/* <div className="parallax3"></div> */}
    <Parallax
      strength={300}
      className="react-parallax"
      bgImage={width < 768 ? Parallax3Mobile : Parallax3}
      bgImageAlt='Aktuell'

    />

    <Container>
      <Row>
        <Col xl="6" lg="6">
          <h2><a className="titel-link" href="https://fahr-landwirtschaft.ch"  rel="noopener noreferrer">LANDWIRTSCHAFT</a> </h2>
        </Col>
        
        <Col xl="6" lg="6">
          <p className="cont-desc">
            {documentToReactComponents(content.landwirtschaftText.json, parseOptions)}
          </p>
          <a className="menu-link" href="https://fahr-landwirtschaft.ch" rel="noopener noreferrer">mehr dazu</a>

        </Col>
      </Row>
    </Container>

    {/* <div className="parallax4"></div> */}
    <Parallax
      strength={300}
      className="react-parallax"
      bgImage={width < 768 ? Parallax4Mobile : Parallax4}
      bgImageAlt='Aktuell'

    />

    <Container>
      <Row>
        <Col xl="6" lg="6">

        <h2 > <a className="titel-link" href="https://fahr-event.ch" rel="noopener noreferrer">TROTTE</a> </h2>
        </Col>
        
        <Col xl="6" lg="6">
          <p className="cont-desc">
            {documentToReactComponents(content.trotteText.json, parseOptions)}
          </p>
          <a className="menu-link" href="https://fahr-event.ch" rel="noopener noreferrer">mehr dazu</a>

        </Col>
      </Row>
    </Container>

    {/* <div className="parallax5"></div> */}
    <Parallax
      strength={300}
      className="react-parallax"
      bgImage={width < 768 ? Parallax5Mobile : Parallax5}
      bgImageAlt='Aktuell'

    />

    <Container>
      <Row>
        <Col xl="6" lg="6">
          <h2><Link className="titel-link" href="/gastronomie">GASTRONOMIE</Link> </h2>
        </Col>
        
        <Col xl="6" lg="6">
          <p className="cont-desc">
            {documentToReactComponents(content.gastronomieText.json, parseOptions)}
          </p>
            {/* <Link className="menu-link" to="/gastronomie"> mehr dazu</Link> */}
        </Col>
      </Row>
    </Container>

    {/* <div className="parallax6"></div> */}
    <Parallax
      strength={300}
      className="react-parallax"
      bgImage={width < 768 ? Parallax6Mobile : Parallax6}
      bgImageAlt='Aktuell'

    />


    <Container>
      <Row>
        <Col xl="6" lg="6">
          <h2><Link className="titel-link" to="/das-team">ÜBER UNS</Link></h2>
        </Col>
        
        <Col xl="6" lg="6">
          <p className="cont-desc">
            {documentToReactComponents(content.aboutText.json, parseOptions)}
          </p>
          <Link className="menu-link" to="/das-team"> mehr über uns</Link>

        </Col>
      </Row>
    </Container>

    {/* <div className="parallax7"></div> */}
    <Parallax
      strength={300}
      className="react-parallax"
      bgImage={width < 768 ? Parallax7Mobile : Parallax7}
      bgImageAlt='Aktuell'

    />


    <section className="top-map">
      <span>Das Kloster Fahr an der Limmat</span>
      <br></br>
      <Link className="AnreiseLink" to="/kontakt">Anreise</Link>
    </section>

    {typeof window !== 'undefined' &&
      <LeafletMap
      position={[47.4087048, 8.4393097]} // Your Coordinates
        zoom={15} // Zoom Level
        markerText={"Kloster Fahr"} // Icon text
      />
    }
    <Footer />
  </Layout>
  )
}

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
    coffeeShop: file(relativePath: { eq: "Landing_TopTitelbild_AD_6672_rgb_web.jpg" }) {
      ...fluidImage
    }
    allContentfulContainerTexteHomepage {
      nodes {
        gastronomieText {
          json
        }
        hofladenText {
          json
        }
        landwirtschaftText {
          json
        }
        trotteText {
          json
        }
        aboutText {
          json
        }
      }
    }
    allContentfulAktuell {
      nodes {
        aktuell
      }
    }
    allContentfulAktuellNew {
      nodes {
        title
        date
        bild {
          file {
            url
          }
        }
        description {
          json
        }
        link {
          json
        }
      }
    }
  }
`;




export default IndexPage
