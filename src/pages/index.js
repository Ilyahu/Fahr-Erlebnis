import React from "react"

import { Container, Row, Col } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { graphql, Link } from "gatsby"
import AktuellMessage from "../components/aktuellMessage"
import LeafletMap from "../components/leafletMap"
import Footer from "../components/footer"
import Slider from "../components/slider"

import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"

const IndexPage = ({
  data: {
    coffeeShop,
    allContentfulContainerTexteHomepage,
    allContentfulAktuell,
    allContentfulAktuellNew,
  },
}) => {
  const content = allContentfulContainerTexteHomepage?.nodes?.[0]

  return (
    <Layout>
      <SEO title="Home" />

      <Hero
        fullScreen
        subtitle="Die Erlebnis-Oase im Limmattal"
        image={coffeeShop.childImageSharp.fluid}
      />

      {allContentfulAktuellNew?.nodes && (
        <AktuellMessage {...allContentfulAktuellNew?.nodes[0]} />
      )}

      <Container style={{ marginTop: "60px" }}>
        <Row>
          <Col xl="12" lg="12">
            <p className="aktuell">
              Aktuell: {allContentfulAktuell?.nodes?.[0]?.aktuell}{" "}
            </p>
            <br></br>
            <p className="cont-desc">
              Das eindrückliche Klosterareal liegt an märchenhafter Flussidylle
              und lädt als Oase zum Verweilen ein. Das Limmattal zwischen Zürich
              und Baden wurde durch die Gründung des Klosters Fahr im Jahr 1130
              und dessen Entwicklung zunehmend geprägt. Die Klosteranlage gehört
              zum Kloster Einsiedeln und ist eine vollständig von Zürcher Boden
              umschlossene Exklave des Kantons Aargau. Rund zwanzig Frauen
              bewohnen das Kloster, die ihr Leben nach den Regeln des heiligen
              Benedikt gestalten.
              <br></br>
              <br></br>
              Der Name "Kloster Fahr" leitet sich von der Fähre ab, die an
              diesem Ort über die Limmat führte und dies an schönen Sonntagen
              und Festtagen noch immer tut.
              <br></br>
              Wir freuen uns, an diesem geschichtsträchtigen Ort neu den
              Landwirtschaftsbetrieb zu führen. Durch unser vielseitiges
              Erlebnisangebot möchten wir Tiere und Landwirtschaft für Gross und
              Klein erlebbar machen. Sie sind herzlich eingeladen, unsere
              lebendige und wissensvermittelnde Oase an der Limmat zu besuchen.
              Bei uns erleben Sie etwas!
              <br></br>
              <br></br>
              Ihr Fahr Erlebnis Team.
            </p>
          </Col>
        </Row>
      </Container>

      <Slider content={content} />

      <section className="top-map">
        <span>Das Kloster Fahr an der Limmat</span>
        <br></br>
        <Link className="AnreiseLink" to="/kontakt">
          Anreise
        </Link>
      </section>

      {typeof window !== "undefined" && (
        <LeafletMap
          position={[47.4087048, 8.4393097]} // Your Coordinates
          zoom={15} // Zoom Level
          markerText={"Kloster Fahr"} // Icon text
        />
      )}
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
`

export const pageQuery = graphql`
  query {
    coffeeShop: file(
      relativePath: { eq: "Landing_TopTitelbild_AD_6672_rgb_web.jpg" }
    ) {
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
`

export default IndexPage
