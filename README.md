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

