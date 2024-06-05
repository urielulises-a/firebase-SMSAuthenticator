import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { getAuth, provideAuth } from '@angular/fire/auth'; 

const firebaseConfig = {

  //Your config goes here
};


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),
    ([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),

    ]),
  ]
};
