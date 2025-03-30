import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'app-web-final-722a6',
        appId: '1:54121770345:web:b0a9cdc1c63c02798921f8',
        storageBucket: 'app-web-final-722a6.firebasestorage.app',
        apiKey: 'AIzaSyAu_r6Mr4Ziyil6UcD-LSaH2TMiuT4f8cg',
        authDomain: 'app-web-final-722a6.firebaseapp.com',
        messagingSenderId: '54121770345',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
