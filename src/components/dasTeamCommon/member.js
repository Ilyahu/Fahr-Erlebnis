import React from "react"
import { Row, Col } from 'reactstrap'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { parseOptions } from '../../utils/praseOptions';

import '../../styles/pages/das-team.scss';

const Member = (props) => {
  return (
    <Row className="member">
      {props?.portraitBild?.file?.url && (
        <Col lg="4">
          <img src={props.portraitBild.file.url} alt={props?.portraitBild?.file?.fileName} />
        </Col>
      )}
      <Col lg="8">
        {props?.name && (
          <h3>{props.name}</h3>
        )}
        
        <div className="data-row">
          <span>Funktion:</span>
          <p>{documentToReactComponents(props.funktion.json, parseOptions)}</p>
        </div>
        <br></br>
        <div className="data-row">
          <span>Mensch:</span>
          <p>{documentToReactComponents(props.mensch.json, parseOptions)}</p>
        </div>
      </Col>
    </Row>
  )
}

export default Member
