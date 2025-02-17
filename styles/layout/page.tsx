import React, { PropsWithChildren } from 'react';

const LayoutPage = ({ children }: PropsWithChildren) => (
  <>
    {children}
    <style global jsx>{`
      #sidebarMenu {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 75%;
        z-index: 110;
        overflow-x: hidden;
        /* Behind the navbar */
        padding: 0 0 0 10px;
        box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
      }

      .sidebarSticky {
        position: relative;
        top: 0;
        height: calc(100vh - 48px);
        padding-top: 0.5rem;
        overflow-x: hidden;
        overflow-y: auto;
        /* Scroll-able contents if viewport is shorter than content. */
      }

      @supports ((position: -webkit-sticky) or (position: sticky)) {
        .sidebarSticky {
          position: -webkit-sticky;
          position: sticky;
        }
      }

      .main {
        margin-left: 0;
        margin-right: 0;
      }

      /*__ small devices [sm] __*/
      @media (min-width: 576px) {
        #sidebarMenu {
          width: 15rem;
        }
      }

      /*__ medium devices [md] __*/
      @media (min-width: 768px) {
        #sidebarMenu {
          z-index: 10;
          width: 15rem;
          display: block;
          padding: 40px 0 0 10px;
        }

        .main {
          margin-right: 0;
          margin-left: 14.5rem;
        }
      }

      /* large devices [lg] */
      @media (min-width: 992px) {
        #sidebarMenu {
          left: 14%;
          width: 15rem;
          padding: 48px 0 48px 10px;
        }

        .main {
          max-width: 37.6rem;
          margin-left: calc(14% + 14.7rem);
        }
      }

      #sidebarMenu .btn {
        outline: none !important;
        box-shadow: none !important;
      }

      #sidebarMenu a:hover {
        background-color: rgba(0, 0, 0, 0.06);
      }
    `}</style>
  </>
);

export default LayoutPage;
