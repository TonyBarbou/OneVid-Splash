import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/FeaturesHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />

      </main>

    </div>
  );
}

export default Home;