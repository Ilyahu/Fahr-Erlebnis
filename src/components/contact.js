import React from "react"
import { toast } from 'react-toastify'
import styled from 'styled-components'

const HiddenInput = styled.input`
  height: 0;
  position: absolute;
  visibility: hidden;
  width: 0;
`

const ContactForm = ({ className }) => {
  const action = process.env.GATSBY_FORMSPREE_ENDPOINT

  function submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        toast('Vielen dank! Wir melden uns bei Ihnen')
      } else {
        toast('Wir haben einen Fehler entdeckt. Bitte versuchen Sie es noch einmal')
      }
    }
    xhr.send(data)
  }

  return (
    <form
      onSubmit={submitForm}
      action={action}
      method="POST"
      className={`${className || ''}`}
    >
      <div className="form-item">
        <label for="name">Name</label>
        <input type="text" name="name" required/>
      </div>

      <div className="form-item">
        <label for="email">Email</label>
        <input type="email" name="email"  required />
      </div>
      
      <div className="form-item">
        <label for="message">Nachricht</label>
        <textarea className="kontaktForm"  name="nachricht" required/>
      </div>
      
      <HiddenInput type="text" name="_gotcha"/>
      <button className="button-kontakt">Senden</button>
      
    </form>
  )
}

export default ContactForm
