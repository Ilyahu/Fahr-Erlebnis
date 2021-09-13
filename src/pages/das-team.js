import React from "react"
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'

import Layout2 from "../components/layout2"
import SEO from "../components/seo"
import Member from '../components/dasTeamCommon/member'
import Footer from '../components/footer'
import HeroTeam from '../components/hero-team'


import '../styles/pages/das-team.scss';

const TeamPage = ({ data: {
  allContentfulTeam,
header} }) => {
return (
  <Layout2>
    <SEO title="Home" />
    <div className="rinde">
    <HeroTeam image={header.childImageSharp.fluid} />



    <Container>
      <Row>
        <Col>
          <p className="subPage-text">
          Am Standort Kloster Fahr bietet sich für uns mit der Fahr Erlebnis AG als Betreiberschaft 
          der Klosterbetriebe die Chance unseren Traum zu verwirklichen: 
          Einen lebendigen, erlebbaren und wissensvermittelnden Landwirtschaftsbetrieb mit einer geselligen Gaststube und ehrlichem Handwerk.
          Der Verkauf von eigenen und regional produzierten Produkten, das persönliche Erleben 
          von landwirtschaftlichen Tätigkeiten sowie ein Kursangebot zu den Themen Lebensmittelproduktion und
           -verarbeitung, Hauswirtschaft und Handwerk stehen im Fokus. 
           Wir streben eine Kombination von Angeboten an, die einen Dialog zwischen 
           Betreibenden und Besucher/-innen ermöglicht.<br></br> Ein Besuch im Kloster Fahr soll 
           zum vielseitigen Erlebnis für Gross und Klein werden.
 </p>
        </Col>
      </Row>
    </Container>

    <Container className="teamCont">
      {allContentfulTeam?.edges?.map((member) => {
        return <Member {...member.node} />
      })}
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
    header: file(relativePath: { eq: "about6.jpg" }) {
      ...fluidImage
    }
    # coffeePortrait: file(relativePath: { eq: "benz_web.jpg" }) {
    #   ...fluidImage
    # }
    allContentfulTeam {
      edges {
        node {
          id
          portraitBild {
            id
            file {
              url
              fileName
            }
          }
          funktion {
            funktion
            json
          }
          mensch {
            json
            mensch
          }
          name
        }
      }
    }
  }
`;

export default TeamPage
