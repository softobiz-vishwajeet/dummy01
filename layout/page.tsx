import React, { PropsWithChildren } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from 'react-hot-toast';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <React.Fragment>
      <Navbar target="sidebarMenu" />
      {children}
      <Footer />
      <Toaster position="bottom-center" />
    </React.Fragment>
  )
}
