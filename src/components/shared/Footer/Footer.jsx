import footerNavData from 'data/footer/footerNav';
import paymentMethodData from 'data/footer/payment';
import socialData from 'data/social';
import Link from 'next/link';
import { NavCol } from './NavCol/NavCol';

export const Footer = () => {
  const footerLogo = '/assets/img/footer-logo.svg';

  const footerNav = [...footerNavData];
  const footerSocial = [...socialData];
  const paymentMethods = [...paymentMethodData];

  return (
    <>
      {/* <!-- BEGIN FOOTER --> */}
      <footer className='footer'>
        <div className='wrapper'>
          <br></br>
          <br></br>
          <div className='footer-nav'>
            {/* Footer Nav */}
            {footerNav.map((nav, index) => (
              <NavCol nav={nav} key={index} />
            ))}
            <div className='footer-nav__col'>
              <span className='footer-nav__col-title'>Contact</span>
              <ul>
                <li>
                  <i className='icon-map-pin'></i> El Dorado Hills, California
                </li>
                <li>
                  <i className='icon-mail'></i>
                  <a href='mailto:info@beshop.com'>Help@WestWares.com</a>
                </li>
                <li>
                  <i className='icon-smartphone'></i>
                    <a href='tel:+15172607885'>+1 (517) 260-7885</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className='footer-top'>
            <div className='footer-top__social'>
              <center>
                <ul>
                  {footerSocial.map((social, index) => (
                    <li key={index}>
                      <a href={social.path}>
                        <i className={social.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </center>
            </div>
            {/*
            <div className='footer-top__logo'>
              <Link href='/'>
                <a>
                  <img src={footerLogo} className='js-img' alt='' />
                </a>
              </Link>
            </div>
            */}

            {/* Payment method */}
            {/*
            <div className='footer-top__payments'>
              <span>Payment methods:</span>
              <ul>
                {paymentMethods.map((payment, index) => (
                  <li key={index}>
                    <img src={payment.icon} className='js-img' alt='' />
                  </li>
                ))}
              </ul>
            </div>
            */}
          </div>
          <div className='footer-copy'>
            <span>&copy; 2024 West Wares</span>
          </div>
        </div>
        <br></br>
      </footer>
      {/* <!-- FOOTER EOF   --> */}
    </>
  );
};
