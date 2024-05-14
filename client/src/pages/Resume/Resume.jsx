import React from 'react';

import { Portfolio } from '@widgets/Portfolio';
import { Resume } from '@widgets/Resume';
import { About } from '@widgets/About';
import { Header } from '@widgets/Header';
import { Services } from '@widgets/Services';
import { Testimonial } from '@widgets/Testimonial';

export const ResumePage = () => {
  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <Services />
      <Resume />
      <Testimonial />
    </>
  )
}
