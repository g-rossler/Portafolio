import './Contact.css';

export default function Contact() {
  return (
    <section id="main-contact">
      <h2 id="main-contact-title">CONTACT</h2>
      <form action="" id="main-contact-form">
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
        <button type="submit" id="form-button">Submit</button>
      </form>
    </section>
  );
}
