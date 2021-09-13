/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ToastContainer } from 'react-toastify'

import Header from "./header"
import '../styles/styles.scss'

const Layout2 = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery2 {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)


  // siteTitle={data.site.siteMetadata.title} 

  return (
    <>
      <Header />
      <ToastContainer />
      <div>
        <sec>{children}</sec>
      </div>
    </>
  )
}

Layout2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout2
