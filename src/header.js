import logo from './img/custom-culinary-logo.svg';


function Header() {
  return (
    <>
      <header className="header">
        <div className="header__brand">
          <a href="http://customculinary.co">
            <img src={logo} alt="custom-culinary-logo" width="150" className="custom__culinay-logo" />
          </a>
        </div>
        <div className="header__text">
          <p>CONVIÉRTETE EN UN MAESTRO FLEXI</p>
        </div>
      </header>
    </>
  );
}

export default Header;
