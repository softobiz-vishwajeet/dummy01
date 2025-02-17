import React from 'react';
import StyleLayout from '../styles/layout/footer';

const Footer = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <StyleLayout>
      {isProduction && <div className="loader loader-default is-active" />}
      <footer className="text-white py-2 px-3 footer" data-nosnippet="true">
        <div className="container">
          <div className="row text-center pt-2">
            <div className="col-12">
              <div className="row">
                <div className="text-center col-12 col-md-6 text-md-left">
                  <div className="d-inline d-md-block">
                    <span className="text-light">Email</span>&nbsp;:&nbsp;
                    <a href="mailto:buddy.business.me@gmail.com">buddy.business.me@gmail.com</a>
                  </div>
                </div>

                <div className="d-block d-md-none" style={{ width: '100%' }}>
                  <hr style={{ borderTopColor: '#bbb', opacity: 0.5, margin: '0.5rem 1rem' }} />
                </div>

                <div className="text-center col-12 col-md-6 text-md-right">
                  <a target="_blank" href="/about.html">
                    About us
                  </a>
                  &nbsp;|&nbsp;
                  <a target="_blank" rel="noreferrer" href={process.env.NEXT_PUBLIC_TERMS}>
                    Terms & Conditions
                  </a>
                  &nbsp;|&nbsp;
                  <a target="_blank" rel="noreferrer" href={process.env.NEXT_PUBLIC_POLICY}>
                    Privacy Policy
                  </a>
                </div>
              </div>

              <hr style={{ borderTopColor: '#bbb', opacity: 0.5, margin: '0.5rem 0' }} />

              <div className="row">
                <span className="col-12 my-0">
                  &copy; {new Date().getFullYear()} All Rights Reserved by{' '}
                  {process.env.NEXT_PUBLIC_APP_URL?.split('://')[1]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </StyleLayout>
  );
};

export default Footer;
