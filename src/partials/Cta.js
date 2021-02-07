import React from 'react';

function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="bg-gradient-to-r from-indigo-700 to-blue-400 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

            <div className="flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="h3 text-white mb-2">Intéressé ?</h3>
                <p className="text-white text-lg opacity-75">Rejoignez notre liste d'attente pour être informé de l'avancée du projet.</p>
              </div>

              {/* CTA button */}
              <div>
              <form action="https://onevid.us7.list-manage.com/subscribe/post?u=c92512f2933547280c4b87d51&amp;id=0de054c912" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" style={{"text-align": "center"}} novalidate>
                <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="email address" required className="border-black border2 border-solid" placeholder="Adresse e-mail" style={{"text-align":"center","margin-bottom": "20px","padding": "10px"}}/>
                <button className="btn text-blue-600 bg-gradient-to-r from-blue-100 to-white">Tenez-moi informé !</button>
              </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Cta;
