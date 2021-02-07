import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Pourquoi OneVid ?</h2>
            <p className="text-xl text-gray-600">OneVid à de nombreux avantages !<br/>Voyons-les ensemble !<br/></p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-100 text-indigo-700 rounded p-10" style={{"box-shadow": "0px 0px 20px 4px rgb(0 0 0 / 12%)"}}>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Prix</h4>
              <p className="text-gray-700 text-center">OneVid permet de réaliser de grandes économies face aux outils existants.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-100 text-indigo-700 rounded p-10" style={{"box-shadow": "0px 0px 20px 4px rgb(0 0 0 / 12%)"}}>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Simplicité</h4>
              <p className="text-gray-700 text-center">Une plateforme de modification simple, pouvant être prise en main par tout le monde.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-100 text-indigo-700 rounded p-10" style={{"box-shadow": "0px 0px 20px 4px rgb(0 0 0 / 12%)"}}>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Rapidité</h4>
              <p className="text-gray-700 text-center">Plus besoin d'attendre, obtenez votre contenu en seulement quelques minutes.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
