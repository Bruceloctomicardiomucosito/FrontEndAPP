import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { AlumnosEndpoints } from './app/alumnos-endpoints/alumnos-endpoints';
import { routes } from './app/app.routes';

//Archivo de punto de entrada de nuestra aplicacion, de manera directa se manda llamar un componente, en este caso el componente se encuentra en la ruta app, y la clase se llama App
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
