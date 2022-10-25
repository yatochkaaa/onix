const Header: React.FC = () => {
  return (
    <header className="header" >
      <div className="header__left">
        <img
          className="header__logo logo"
          src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022012/onix.jpg?itok=bjNVnEXh"
          alt="logo"
        />
        <div className="header__company">
          ONIX01<br/>
          ONIX01<br/>
          ONIX01<br/>
        </div>
      </div>

      <div className="header__right">
        <div className="header__tagline">
          ONIX01<br/>
          ONIX01<br/>
          ONIX01<br/>
        </div>
        <ul className="header__contacts contacts">
          <li className="contacts__item">+38 (000) 000-00-00</li>
          <li className="contacts__item">+38 (000) 000-00-00</li>
          <li className="contacts__item">info@onix01.com</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
