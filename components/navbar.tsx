import React, { useState } from 'react';
import StyleLayout from '../styles/layout/navbar';

const Navbar = ({ target }: { target: string }) => {
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
  const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

  const isTarget = target !== '' && target !== '#';
  const dropClass = 'modal-backdrop fade show';
  const [drop, setDrop] = useState(false);

  // Handle sidebar if present
  const handleClick = () => {
    if (isTarget) {
      const element = document.querySelector(`#${target}`) as HTMLInputElement;
      document.body.classList.toggle('modal-open');
      element.classList.toggle('collapse');
      element.classList.toggle('d-none');
      setDrop(!drop);
    }
  };

  return (
    <StyleLayout>
      <header className="container-fluid py-2 px-3 bg-white border-bottom shadow-sm position-sticky">
        <div className="nav-top row">
          <div className="nav-left col">
            <button
              type="button"
              onClick={handleClick}
              aria-label="Toggle navigation"
              aria-expanded={drop ? 'true' : 'false'}
              className={`btn navbar-toggler d-md-none none collapsed ${!isTarget && 'd-none'}`}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <h3 className="d-inline">
              <a id="navbar-brand" href={APP_URL} style={{ color: '#212529' }}>
                {APP_NAME}
              </a>
            </h3>
          </div>
        </div>

        <div
          tabIndex={0}
          role="button"
          aria-label="close"
          className={drop ? dropClass : ''}
          onClick={() => (document.querySelector('.navbar-toggler') as HTMLInputElement).click()}
          onKeyDown={(e) => e.key === 'Enter' && (document.querySelector('.navbar-toggler') as HTMLInputElement).click()}
        />
      </header>
    </StyleLayout>
  );
};

export default Navbar;
