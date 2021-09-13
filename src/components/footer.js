import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { toast } from 'react-toastify'
import { Link } from "gatsby"

import telegramIcon from '../images/telegram.svg'
import facebookIcon from '../images/facebook.svg'
import instagramIcon from '../images/instagram.svg'

const Footer = () => {
  const [value, setValue] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(value)
    if (value) {
      addToMailchimp(value)
        .then((data) => {
          if (data.result === 'error') {
            toast('Etwas hat nicht funktioniert. Bitte versuchen Sie es noch einmal')
          }

          if (data.result === 'success') {
            toast('Vielen Dank - Wir halten Sie auf dem laufenden.', )
            setValue('')
          }
        })
    }
  }

  return (
    <footer>
      <section>
      
        <div className="address">
          <h3>Fahr Erlebnis AG</h3>
          <span>Chlosterstrasse</span>
          <span>
          8109 Kloster Fahr
          </span>
          <span><a href="mailto:info@fahr-erlebnis.ch">info@fahr-erlebnis.ch</a></span>
          <span> <a href="tel:+41794193333">079 419 33 33</a></span>
          <br></br>
          <span><Link to="/impressum">Impressum</Link></span>

        </div>
        <div className="Newsletter">
          {/* <p>Bleiben Sie auf dem laufenden</p> */}
          <form onSubmit={onSubmit}>
            <h3>Newsletter</h3>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              name="message"
              type="email"
              placeholder="e-mail"
            />
            <button type="submit">
              <img src={telegramIcon} alt="telegram" />
            </button>
            <div className="social-links">
              <a target="_blank" href="https://www.instagram.com/fahr_erlebnis">
                <img src={instagramIcon} alt="instagram" />
              </a>
              <a target="_blank" href="https://www.facebook.com/FahrErlebnis">
                <img src={facebookIcon} alt="facebook" />
              </a>
            </div>
          </form>
         
          
        </div>
      </section>
      {/* <p style={{ marginBottom: 0, paddingBottom: '10px'}}>Eine Webseite von 
      <a href="https://Gewerbe-Seiten.ch" target="_blank" rel="noopener noreferrer">Gewerbe-Seiten.ch</a> 
      </p> */}
    </footer>
  )
}

export default Footer;