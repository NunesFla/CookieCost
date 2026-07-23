// =======================================
// COOKIECOST - SERVICE WORKER
// Controle de funcionamento offline do PWA
// =======================================

const CACHE_NAME = "cookiecost-v1";

const ARQUIVOS_CACHE = [

    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",

    "./assets/logo.png",
    "./assets/icon-192.png",
    "./assets/icon-512.png"

];


// Instalação do Service Worker

self.addEventListener("install", event => {

    console.log("CookieCost instalado");

    event.waitUntil(

        caches.open(CACHE_NAME)

        .then(cache => {

            return cache.addAll(ARQUIVOS_CACHE);

        })

    );

});


// Ativação

self.addEventListener("activate", event => {

    console.log("CookieCost ativo");

});


// Intercepta solicitações

self.addEventListener("fetch", event => {


    event.respondWith(

        caches.match(event.request)

        .then(resposta => {


            // Se existir no cache, usa o arquivo salvo

            if(resposta){

                return resposta;

            }


            // Caso contrário busca na internet

            return fetch(event.request);


        })

    );


});