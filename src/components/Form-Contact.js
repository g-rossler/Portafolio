import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form-Contact.css';

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_yv5020o',
        'contact_form',
        form.current,
        '2yGUAhHTX8tnAmsLP',
      )
      .then(
        (result) => {
          const $div = document.createElement('div');
          $div.innerText = 'hola';
          const $sectionForm = document.querySelector('#section-form');
          $sectionForm.appendChild($div);
          const $form = document.querySelector('#form-container');
          $form.remove();
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <section className="main-contact" id="section-form">
      <h2 className="main-contact-title">CONTACT</h2>
      <div id="form-container">
        <form ref={form} onSubmit={sendEmail} id="main-contact-form">
          <div className="form-element">
            <label
              htmlFor="main-contact-form-input-name"
              id="main-contact-form-label-name"
              className="form-label"
            >
              Name
              <input
                type="text"
                name="user_name"
                placeholder="Enter Your Name"
                id="main-contact-form-input-name"
                className="form-input"
              />
            </label>
          </div>

          <div className="form-element">
            <label
              htmlFor="main-contact-form-input-email"
              id="main-contact-form-label-email"
              className="form-label"
            >
              Email
              <input
                type="email"
                name="user_email"
                placeholder="Enter Your Email"
                id="main-contact-form-input-email"
                className="form-input"
              />
            </label>
          </div>

          <div className="form-element">
            <label
              htmlFor="main-contact-form-input-message"
              id="main-contact-form-label-message"
              className="form-label"
            >
              Message
              <textarea
                name="message"
                placeholder="Enter Your Message"
                id="main-contact-form-input-message"
                className="form-input"
              />
            </label>
          </div>

          <input type="submit" value="Send" id="form-button" />
        </form>
      </div>
    </section>
  );
}
