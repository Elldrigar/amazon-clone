import React from 'react';
import './footer.scss';

function Footer() {
  const actualDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  return (
    <div className="footer">
      <p className="footer__text">
        Amazon clone made by: <span className="footer__name">Artur Gawron</span>{' '}
        © {actualDate()}
      </p>
    </div>
  );
}

export default Footer;
