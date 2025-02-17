import React, { PropsWithChildren } from 'react';

const LayoutFooter = ({ children }: PropsWithChildren) => (
  <>
    {children}
    <style global jsx>{`
      .footer {
        z-index: 100;
        font-size: 0.9rem;
        position: relative;
        background-color: #212121;
      }

      .footer p,
      .footer span {
        color: #6c757d;
        margin-bottom: 0.5rem;
      }

      .footer a {
        color: #fff;
        opacity: 0.6;
        text-decoration: none;
      }
    `}</style>
  </>
);

export default LayoutFooter;
