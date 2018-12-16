# SampleApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Angular  7 sample
## Prerequisites
Before you begin, make sure your development environment includes Node.js® and an npm package manager.

Node.js
Angular requires Node.js version 8.x or 10.x.

To check your version, run node -v in a terminal/console window.
```
node -v
```
To get Node.js, go to nodejs.org.

npm package manager
Angular, the Angular CLI, and Angular apps depend on features and functionality provided by libraries that are available as npm packages. To download and install npm packages, you must have an npm package manager.

This Quick Start uses the npm client command line interface, which is installed with Node.js by default.

To check that you have the npm client installed, run npm -v in a terminal/console window.
```
npm -v
```


## commands
### Install the Angular CLI
To install the CLI using npm, open a terminal/console window and enter the following command:

```
npm install -g @angular/cli
```

? Would you like to add Angular routing? (y/N)?

? Which stylesheet format would you like to use? (Use arrow keys)

Or with default option
```
npm install -g @angular/cli --style=scss --routing
```
### Angular CLI help
Available Commands:
```
ng help
```
Specific command help
```
ng new --help
ng generate --help
```


### Create a workspace and initial application

```
ng new sample-app
```

Serve the application
```
cd sample-app
ng serve --open
```
or shorthand
```
ng s -o
```

Open into VS code
```
code .
```

### Generate a component
Create Sidebar component
```
ng generate component sidebar
```
or shorthand
```
ng g c sidebar
```

Create Users component
```
ng g c users
```

Create UserDetails component
```
ng g c userDetails
```

### Create a data service
```
ng generate service userData
```
Or 
```
ng g s userData
```

## build
```
ng build
```
production build
```
ng build --prod
```


## Usefull lniks
### Icons
https://material.io/tools/icons/

### Google Fonts
https://fonts.google.com/
