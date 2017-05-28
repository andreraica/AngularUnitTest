# AngularUnitTest
Its a basic template using Karma and Jasmine to make an angularJS test

# Running Project

root folder - npm install
src/app folder - bower install
root folder (build webpack to dist folder) - npm run dev
open in browser the page - ..AngularUnitTest/dist/index.html 

root folder (test project) - karma start

# Create Project --------------

# Basic Commands

create a folder
npm init
md src
inside src -> md app, app/index.html, app/js/app.js folder
cd app
npm install bower --save-dev
bower install angular --save-dev

# WebPack Commands

npm i -D webpack
npm i -g webpack
npm view webpack --json
npm i -D webpack@2.6.0
md dist
type NUL > md webpack.config.js (with errors - thats okay)
Configure a WebPack.config
Edit package.json (scripts dev / prod)
npm i html-webpack-plugin --save-dev
change yourself the webpack.config.js
npm run dev

# Karma / Jasmine Test Commands

npm install karma karma-jasmine jasmine-core karma-chrome-launcher --save-dev
npm install -g karma-cli
karma init
make app.spec.js (any test)
bower install angular --save-dev
bower install angular-mocks --save-dev
bower install angular-resource --save-dev
karma start