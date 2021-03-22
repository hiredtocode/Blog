import React from 'react';
import Footer from './footer';
import Sidebar from './sidebar';
import Content from './content';

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
