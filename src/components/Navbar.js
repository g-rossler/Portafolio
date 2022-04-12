import Logo from './Image/Logo.png';
import './Navbar.css';
import Icon from './Image/Icon-Hamburger.svg';

function Navbar() {
  return (
    <div className="navbar">
      <div id="navbar-info">
        <img src={Logo} alt="" id="navbar-info-logo" />
        <h2 id="navbar-info-title">Rossler Gerardo</h2>
      </div>
      <div>
        <img src={Icon} alt="" id="icon-ham" />
      </div>
    </div>
  );
}

export default Navbar;
