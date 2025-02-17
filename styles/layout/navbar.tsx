import React, { PropsWithChildren } from 'react';

const LayoutNavbar = ({ children }: PropsWithChildren) => (
  <>
    {children}
    <style global jsx>{`
      header {
        top: 0;
        z-index: 100;
      }

      .navbar-toggler-icon {
        vertical-align: baseline;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
      }

      .navbar-toggler {
        border: 0;
        padding: 0;
        margin-right: 0.6rem;
        vertical-align: bottom;
        color: rgba(0, 0, 0, 0.5);
        background-color: #ffffff !important;
      }

      #navbar-brand {
        color: #2874f0;
        display: inline;
        line-height: 1.5;
        text-decoration: none;
        font-size: 1.5rem !important;
        font-family: 'Ubuntu', sans-serif;
      }
    `}</style>
  </>
);

export default LayoutNavbar;
