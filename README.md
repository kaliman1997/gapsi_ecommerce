# GapsiEcommerce

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8 y NodeJS version 20.9.0

El frontEnd utiliza algunos componenetes de Angular Material. El codigo fuente del front esta en ./src/app/
El frontEnd compilado esta en ./dist

El backend utiliza servidor Koa. El archivo principal del backend es ./index.js. El server koa tambien sirve las paginas del frontEnd

Los webservices se encuentran documentados en el siguiente documento de Postman: https://documenter.getpostman.com/view/4417399/2s9YXbB6nT

El proyecto utiliza los siguientes patrones de diseño:
Dependency Injection en Angular.. los modulos solo son injectados en los componentes.
Routing en el backend para resolver las rutas de los webservices

##Descarga, instalación y ejecución

Para descargar el proyecto ejecutar el comando: git clone https://github.com/kaliman1997/gapsi_ecommerce

Cambiarse a la carpeta gapsi_ecommerce.
Para instalar las dependencias ejecutar el comando: npm init

Para iniciar la aplicacion ejecutar el comando: node ./index.js

La aplicacion se visualiza en un navegador web en la siguiente liga: http://localhost:3000/



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
