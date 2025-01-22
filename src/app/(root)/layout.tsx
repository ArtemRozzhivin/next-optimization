import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { ReactNode, useState } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=''>
      <Navbar />
      <div className='p-3 md:p-7'>{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
