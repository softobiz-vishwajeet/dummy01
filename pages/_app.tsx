import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css';

import StoreContext from '../redux/store';
import type { AppProps } from 'next/app';
import { NextPage } from 'next/types';
import PageLayout from '../layout/page';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <StoreContext>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </StoreContext>
  )
}
