import Logo from './Image/Logo.png';
import './Navbar.css';
import Icon from './Image/Icon-Hamburger.svg';

function Navbar() {
  return (
    <div className="Navbar">
      <div id="Navbar-info">
        <img src={Logo} alt="" id="Navbar-info-logo" />
        <h2 id="Navbar-info-title">Rossler Gerardo</h2>
      </div>
      <div>
        <img src={Icon} alt="" id="Icon-ham" />
      </div>
    </div>
  );
}

export default Navbar;
