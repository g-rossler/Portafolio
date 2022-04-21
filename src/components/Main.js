import './Main.css';
import Form from './Form-Contact';

export default function Main() {
  return (
    <div id="main">

      <section id="main-introduccion">
        <h1 id="main-introduccion-title">HELLO MY NAME IS GERARDO ROSSLER</h1>
        <p id="main-introduccion-subtitle">I&apos;m a front end developer.</p>
        <div id="main-introduccion-group-button">
          <button type="button" className="main-introduccion-button button-54" id="button-proyects">PROJECTS</button>
          <button type="button" className="main-introduccion-button button-54" id="button-github">GITHUB</button>
          <button type="button" className="main-introduccion-button button-54" id="button-linkedin">LINKEDIN</button>
        </div>
      </section>

      <section id="main-about-me">
        <h2 id="main-about-me-title">ABOUT ME</h2>
        <p id="main-about-me-subtitle">I am a software developer</p>
        <div id="main-technologies">
          <h2 id="main-technologies-title">TECHNOLOGIES</h2>
          <div id="main-technologies-list">
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

      <section id="main-proyect">
        <h2 id="main-proyect-title">PROYECTS</h2>
        <div id="main-proyect-list">
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
        <h3 id="main-proyect-subtitle">SMALL PROYECTS</h3>
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
      <Form />
    </div>
  );
}
