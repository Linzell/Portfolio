// src/components/Contact.js

import React from 'react';



export default function Contact() {
    const [name] = React.useState("");
    const [email] = React.useState("");
    const [message] = React.useState("");

    function encode(data) {
        return Object.keys(data)
          .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", name, email, message }),
        })
          .then(() => alert("Message non envoyé, encore en développmement! :-)"))
          .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="relative bg-gray-800">
          <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <form
              netlify
              name="contact"
              onSubmit={handleSubmit}
              className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-4">
              <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                Engagez-moi
              </h2>
              <p className="leading-relaxed mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                suscipit officia aspernatur veritatis. Asperiores, aliquid?
              </p>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Votre adresse email"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Votre message que vous voulez joindre"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg animate-pulse">
                Envoyer
              </button>
            </form>
            <div className="lg:w-2/3 md:w-1/2 bg-gray-900  rounded-lg overflow-hidden sm:ml-10 p-10 flex items-end justify-start relative m-4">
              <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                style={{ filter: "opacity(0.7)" }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21104.05183374062!2d7.755998099999999!3d48.60971925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1626258815849!5m2!1sfr!2sfr"
              />
              <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    ADRESSE
                  </h2>
                  <p className="mt-1">
                    13, rue de Bischheim <br />
                    67300 Schiltigheim France
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-indigo-400 leading-relaxed">
                    linzellart@gmail.com
                  </a>
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                    TELEPHONE
                  </h2>
                  <p className="leading-relaxed">+336.46.11.44.07</p>
                </div>
              </div>
            </div>
            
          </div>
        </section>
    );
}