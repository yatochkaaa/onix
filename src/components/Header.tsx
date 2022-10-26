const Header: React.FC = () => {
  return (
    <header className="header" >
      <div className="header__left">
        <a href="/">
          <img
            src="../imgs/logo.png"
            className="header__logo logo"
            alt="logo"
          />
        </a>
        <ul className="header__company">
          <li className="header__companyItem">
            SOFTWARE
          </li>
          <li className="header__companyItem">
            DEVELOPMENT
          </li>
          <li className="header__companyItem">
            SERVICES
          </li>
        </ul>
      </div>

      <div className="header__right">
        <ul className="header__tagline">
          <li className="header__taglineItem">
            WHATEVER <span className="span-color">YOU</span>
          </li>
          <li className="header__taglineItem">
            CAN <span className="span-color">IMAGINE</span>
          </li>
          <li className="header__taglineItem">
            <span className="span-color">WE</span> CAN <span className="span-color">DELIVER</span>
          </li>
        </ul>
        <ul className="header__contacts contacts">
          <li className="contacts__item">
            <a href="tel:380000000000">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="contacts__itemIcon icon icon__phone" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
              <span className="contacts__itemText">+38 (000) 000-00-00</span>
            </a>
          </li>
          <li className="contacts__item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="contacts__itemIcon icon icon__phone" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
            <a href="tel:380000000000">
            <span className="contacts__itemText">+38 (000) 000-00-00</span>
            </a>
          </li>
          <li className="contacts__item">
            <a href="mailto:info@onixlab.com">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="contacts__itemIcon icon icon__phone" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
              <span className="contacts__itemText">info@onixlab.com</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
