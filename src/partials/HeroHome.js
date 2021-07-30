import React, { useState } from 'react';
import Modal from '../utils/Modal';


function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-20 pb-12 md:pt-20 md:pb-20">

          {/* Section header */}
          <div className="pb-12 md:pb-16">
            <h1 className="text-4xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4 text-left	" data-aos="zoom-y-out">Créez des vidéos marketing uniques<br/>avec <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-400">OneVid</span></h1>
            <div className="">
            <div className="ml-0 sm:ml-20 mt-20 text-left sm:flex " data-aos="zoom-y-out" data-aos-delay="300">
              <ol className="text-3xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-4 text-left">
                <li><span className="leading-loose text-white px-8 py-2 bg-black rounded-full inline-block">1</span><ul className="inline-block ml-5 align-middle"><li><span className="text-2xl">Choisissez une trame</span></li><li><span className="text-base font-normal">Blabla</span></li></ul></li>
                <li><span className="leading-loose text-white px-8 py-2 bg-black rounded-full inline-block">2</span><ul className="inline-block ml-5 align-middle"><li><span className="text-2xl">Personnalisez-la</span></li><li><span className="text-base font-normal">Blabla</span></li></ul></li>
                <li><span className="leading-loose text-white px-8 py-2 bg-black rounded-full inline-block">3</span><ul className="inline-block ml-5 align-middle"><li><span className="text-2xl">Récuperez-la</span></li><li><span className="text-base font-normal">Blabla</span></li></ul></li>
              </ol>
              <div className="w-6/12 float-right">               
                <button className="btn bg-blue-500 text-white">Tenez-moi informé !</button>
              </div>
              </div>
            </div>
          </div>
        </div>
        <form action="https://onevid.us7.list-manage.com/subscribe/post?u=c92512f2933547280c4b87d51&amp;id=0de054c912" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="email address" required className="border-black border2 border-solid" placeholder="Adresse e-mail" style={{"text-align":"center","margin-bottom": "20px"}}/>
                <button className="btn bg-blue-500 text-white">Tenez-moi informé !</button>
              </form>
      </div>
    </section>
    
  );
}

export default HeroHome;