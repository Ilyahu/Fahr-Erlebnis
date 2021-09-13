import React, { useState } from 'react'
import { Container, Row, Col } from "reactstrap"
import cn from 'classnames'
import ErlebnisseK from './erlebnisse-kinder'
import Ferienlager from './erlebnisse-ferienlager'
import ErlebnisseE from './erlebnisse-erwachsene'
import ErlebnisseS from './erlebnisse-schule'
import ErlebnisseMais from './erlebnisse-mais'


const MenuErlebnisse = () => {
  const [menuCategory, setMenuCategory] = useState('Maislabyrinth');
  let SelectedCategory;
  if (menuCategory === 'Maislabyrinth' ) {
    SelectedCategory = ErlebnisseMais;
  }
  else if (menuCategory === 'Kinder' ) {
    SelectedCategory = ErlebnisseK;
  } else if (menuCategory === 'Schulen') {
    SelectedCategory = ErlebnisseS
  } else if (menuCategory === 'Erwachsene') {
    SelectedCategory = ErlebnisseE
  } else if (menuCategory === 'Ferienlager') {
    SelectedCategory = Ferienlager
  }
  
  console.log(menuCategory)

  return (
    <Container className="menu">
      <Row>
        <Col xl="6" lg="6">
          <h2 ><a className="titel-link" href="https://fahr-erleben.ch"  rel="noopener noreferrer">FAHR ERLEBNISSE</a></h2>
        </Col>
        <Col xl="6" lg="6">
          <div className="menu-content">

          <ul className="menu-headers">
                      <li className={cn("menu-header", { 'active': menuCategory === 'Maislabyrinth' })} onClick={() => setMenuCategory('Maislabyrinth')}>Maislabyrinth</li>

            <li className={cn("menu-header", { 'active': menuCategory === 'Kinder' })} onClick={() => setMenuCategory('Kinder')}>Kinder</li>
            <li className={cn("menu-header", { 'active': menuCategory === 'Schulen' })} onClick={() => setMenuCategory('Schulen')}>Schule</li>
            {/* <li className="menu-header" onClick={() => setMenuCategory('Erwachsene')}>Workshops</li> */}
            <li className={cn("menu-header", { 'active': menuCategory === 'Ferienlager' })} onClick={() => setMenuCategory('Ferienlager')} >Ferienlager</li>
          </ul>
          <SelectedCategory />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default MenuErlebnisse;