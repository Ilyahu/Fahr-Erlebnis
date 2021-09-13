import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const ErlebnisseMais = () => {
  const data = useStaticQuery(graphql`
  query {
  allContentfulErlebnisseTextHomepage(filter: {name: {eq: "Maislabyrinth"}}) {
    edges {
      node {
        beschreibung {
          beschreibung
        }
      }
    }
  }
 }   `)

  const items = data.allContentfulErlebnisseTextHomepage.edges;
  return (
    <div>
      {/* <p className="sample">Erlebnisse für Schulen</p> */}
      <ul className="menu-items-grid">
        {
          items.map(({ node }) => {
            return (
              <li key={node.id} className="menu-item">
                {/* <h3>{node.title}</h3> */}
                <span>{node.beschreibung.beschreibung}</span>
              </li>
            )
          })
        }
      </ul>
      <br></br>

      <a className="menu-link" href="https://fahr-erleben.ch"  rel="noopener noreferrer">mehr dazu</a>

    </div>
  )
}

export default ErlebnisseMais;