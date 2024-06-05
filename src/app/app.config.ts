import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { getAuth, provideAuth } from '@angular/fire/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyBraHqXbIuzNnLciVbuwzS_akXHWt67xC4",
  authDomain: "angularfireaut.firebaseapp.com",
  projectId: "angularfireaut",
  storageBucket: "angularfireaut.appspot.com",
  messagingSenderId: "359433537495",
  appId: "1:359433537495:web:2f78d1c528a625ff8aed92",
  measurementId: "G-6V9WPMRFPG"
};


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),
    ([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),

    ]),
  ]
};
