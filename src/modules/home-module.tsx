import React from 'react';
import {Banner, WhatWeOffer, Projects, About, Partner, Contectus} from '../components/imports';

function Home_Module() {
  return (
    <>
      <Banner/>
      <WhatWeOffer/>
      <Projects/>
      <Partner />
      <About />
      <Contectus/>
    </>
  )
}

export default Home_Module