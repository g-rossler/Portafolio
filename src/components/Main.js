import './Main.css';

export default function Main() {
  return (
    <div className="main">

      <section className="main-introduccion">
        <h1 className="main-introduccion-title">HELLO MY NAME IS GERARDO ROSSLER</h1>
        <p className="main-introduccion-subtitle">I&apos;m a front end developer.</p>
        <div className="main-introduccion-group-button">
          <button type="button" className="main-introduccion-button" id="button-proyects">PROJECTS</button>
          <button type="button" className="main-introduccion-button" id="button-github">GITHUB</button>
          <button type="button" className="main-introduccion-button" id="button-linkedin">LINKEDIN</button>
        </div>
      </section>

      <section className="main-about-me">
        <h2 className="main-about-me-title">ABOUT ME</h2>
        <p className="main-about-me-subtitle">I am a software developer</p>
        <div className="main-technologies">
          <h2 className="main-technologies-title">TECHNOLOGIES</h2>
          <div className="main-technologies-list">
            <div className="main-technologies-list-item">HTML</div>
            <div className="main-technologies-list-item">JavaScript</div>
            <div className="main-technologies-list-item">CSS</div>
            <div className="main-technologies-list-item">React</div>
            <div className="main-technologies-list-item">Node.JS</div>
            <div className="main-technologies-list-item">Cypress</div>
            <div className="main-technologies-list-item">NPM</div>
            <div className="main-technologies-list-item">Babel</div>
            <div className="main-technologies-list-item">jQuery</div>
            <div className="main-technologies-list-item">Git</div>
            <div className="main-technologies-list-item">GitHub</div>
            <div className="main-technologies-list-item">Jest</div>
            <div className="main-technologies-list-item">BootStrap</div>
          </div>
        </div>
      </section>

      <section className="main-proyect">
        <h2 className="main-proyect-title">PROYECTS</h2>
        <div className="main-proyect-list">
          <div className="main-proyect-list-item">
            <h4 className="main-proyect-list-item-title">Pokedex</h4>
            <p className="main-proyect-list-item-subtitle">example text</p>
            <div className="main-proyect-list-item-group-button">
              <button type="button" className="main-proyect-list-item-button">DEMO</button>
              <button type="button" className="main-proyect-list-item-button">GITHUB</button>
            </div>
          </div>
          <div className="main-proyect-list-item">
            <h4 className="main-proyect-list-item-title">Portafolio</h4>
            <p className="main-proyect-list-item-subtitle">example text</p>
            <div className="main-proyect-list-item-group-button">
              <button type="button" className="main-proyect-list-item-button">DEMO</button>
              <button type="button" className="main-proyect-list-item-button">GITHUB</button>
            </div>
          </div>
          <div className="main-proyect-list-item">
            <h4 className="main-proyect-list-item-title">Proyect 3</h4>
            <p className="main-proyect-list-item-subtitle">example text</p>
            <div className="main-proyect-list-item-group-button">
              <button type="button" className="main-proyect-list-item-button">DEMO</button>
              <button type="button" className="main-proyect-list-item-button">GITHUB</button>
            </div>
          </div>
        </div>
        <h3 className="main-proyect-subtitle">SMALL PROYECTS</h3>
        <div className="main-proyect-subtitle-list">
          <div className="main-proyect-subtitle-list-item">
            <h4 className="main-proyect-subtitle-list-item-title">Example proyect</h4>
            <p className="main-proyect-subtitle-list-item-subtitle">example text</p>
            <div className="main-proyect-subtitle-list-item-group-button">
              <button type="button" className="main-proyect-subtitle-list-item-botton">DEMO</button>
              <button type="button" className="main-proyect-subtitle-list-item-botton">GITHUB</button>
            </div>
          </div>
          <div className="main-proyect-subtitle-list-item">
            <h4 className="main-proyect-subtitle-list-item-title">Example proyect</h4>
            <p className="main-proyect-subtitle-list-item-subtitle">example text</p>
            <div className="main-proyect-subtitle-list-item-group-button">
              <button type="button" className="main-proyect-subtitle-list-item-botton">DEMO</button>
              <button type="button" className="main-proyect-subtitle-list-item-botton">GITHUB</button>
            </div>
          </div>
          <div className="main-proyect-subtitle-list-item">
            <h4 className="main-proyect-subtitle-list-item-title">Example proyect</h4>
            <p className="main-proyect-subtitle-list-item-subtitle">example text</p>
            <div className="main-proyect-subtitle-list-item-group-button">
              <button type="button" className="main-proyect-subtitle-list-item-botton">DEMO</button>
              <button type="button" className="main-proyect-subtitle-list-item-botton">GITHUB</button>
            </div>
          </div>
        </div>
      </section>

      <section className="main-contact">
        <h2 className="main-contact-title">CONTACT</h2>
        <form action="" className="main-contact-form">
          <label htmlFor="name" className="main-contact-form-label-name">
            Name:
            <input type="text" placeholder="Enter Your Name" id="name" className="main-contact-form-input-name" />
          </label>
          <label htmlFor="email" className="main-contact-form-label-email">
            Email:
            <input type="text" placeholder="Enter Your Email" id="email" className="main-contact-form-input-email" />
          </label>
          <label htmlFor="message" className="main-contact-form-label-message">
            Message:
            <input type="text" placeholder="Enter Your Message" id="message" className="main-contact-form-input-message" />
          </label>
        </form>
      </section>
    </div>
  );
}
