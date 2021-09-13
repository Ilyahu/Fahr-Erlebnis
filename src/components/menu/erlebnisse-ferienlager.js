import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const Ferienlager = () => {
  const data = useStaticQuery(graphql`
  query  {
  allContentfulErlebnisseTextHomepage(filter: {name: {eq: "Erlebnisse Ferienlager"}}) {
    edges {
      node {
        beschreibung {
          beschreibung
        }
      }
    }
  }
}
  `)

const items = data.allContentfulErlebnisseTextHomepage.edges;
return (
    <div>
      <ul className="menu-items-grid">
        {
          items.map(({ node }) => {
            return (
                <li key={node.id} className="menu-item">
                <span>{node.beschreibung.beschreibung}</span>
              </li>
            
            )
          })
        }
      </ul>
      <br></br>

      <a className="menu-link" href="https://fahr-erleben.ch"  rel="noopener noreferrer">zur Anmeldung</a>
    </div>
  )
}

export default Ferienlager;