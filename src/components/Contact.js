import './Contact.css';
import { useForm } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('1922533808612047967');
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }

  return (
    <section id="main-contact">
      <h2 id="main-contact-title">CONTACT</h2>
      <form action="" id="main-contact-form" onSubmit={handleSubmit}>
        <div className="form-element">
          <label htmlFor="main-contact-form-input-name" id="main-contact-form-label-name" className="form-label">
            Name:
            <input
              type="text"
              placeholder="Enter Your Name"
              id="main-contact-form-input-name"
              className="form-input"
            />
          </label>
        </div>
        <div className="form-element">
          <label htmlFor="main-contact-form-input-email" id="main-contact-form-label-email" className="form-label">
            Email:
            <input
              type="email"
              placeholder="Enter Your Email"
              id="main-contact-form-input-email"
              className="form-input"
            />
          </label>
        </div>
        <div className="form-element">
          <label htmlFor="main-contact-form-input-message" id="main-contact-form-label-message" className="form-label">
            Message:
            <input
              type="text"
              placeholder="Enter Your Message"
              id="main-contact-form-input-message"
              className="form-input"
            />
          </label>
        </div>
        <button type="submit" id="form-button" disabled={state.submitting}>Submit</button>
      </form>
    </section>
  );
}
