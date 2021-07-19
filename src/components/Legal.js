// src/components/Legal.js

import React from 'react';

export default function Legal() {
    return (
        <main>
            <div className="grid grid-cols-1 gap-2 place-items-center m-10">
                <div className="flex flex-auto gap-5">
                    <a href="https://github.com/Linzell"
                        target="_blank">
                        <img src="./signe-github.svg" 
                        alt="Icone Github"
                        className="w-8" 
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/charlie-cohen-47b241a2/"
                        target="_blank">
                        <img src="./linkedin.svg" 
                        alt="Icone Linkedin"
                        className="w-8"
                        />
                    </a>
                </div>
            </div>
            <div className="pb-10">
                <div className="mx-auto text-center m-2"> 
                    © 2021 Charlie Cohen. Tous droits réservés.
                </div>
                <div className="mx-auto text-center"> 
                    <a href="" className="p-2">À propos</a> <a href="" className="p-2">Mentions légales</a> <a href="" className="p-2">Nous contacter</a>
                </div>
            </div>
        </main>
    )
}