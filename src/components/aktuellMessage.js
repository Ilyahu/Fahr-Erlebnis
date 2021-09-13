import React, { useEffect, useState } from 'react'
import Img from 'gatsby-image'
import {CSSTransition } from 'react-transition-group';
import { Container, Row, Col } from "reactstrap"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { parseOptions } from '../utils/praseOptions';

import cancelIcon from "../images/cancel.svg"


import Parallax2 from '../images/hofladen_fahr-erlebnis.jpeg'

function AktuellMessage ({ description, link, bild, date, title }) {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setIsActive(true)
    }, [])

    return (
      <CSSTransition 
        timeout={1000}
        classNames="alert"
        in={isActive}
        unmountOnExit
      >
        <section className="aktuell-container">
          <Container>
            <Row style={{ marginBottom: '20px'}}>
              <Col sm={12} md={6} lg={6} xl={12}>
                <h2 className="title">
                  {title}
                </h2>
                <img onClick={() => setIsActive(false)} className="close-icon" src={cancelIcon} alt="close" />
              </Col>
              <Col sm={12} md={6} lg={6} xl={12}>
                <span className="date">
                  {date}
                </span>
              </Col>
            </Row>

            <Row>
              <Col sm={12} md={6} lg={6} xl={12}>
                {bild?.file?.url && (
                  <img
                    src={bild.file.url}
                    alt="Company Thumbnail"
                    className="img-head"
                  />   
                )}
              </Col>
              <Col className="custom-col" sm={12} md={6} lg={6} xl={12}>
                <p className="subtitle">
                  {documentToReactComponents(description?.json, parseOptions)}
                </p>
                <p className="subtitle">
                  {documentToReactComponents(link?.json, parseOptions)}
                </p>
              </Col>
            </Row>
          </Container>
      </section>
      </CSSTransition >
    )
}

export default AktuellMessage;
