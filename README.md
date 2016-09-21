# New York City Budget Explorer

A web app for exploring the details of NYC's budget.

## Requirements

+ [NPM](https://www.npmjs.com/)
+ [Gulp](http://gulpjs.com/)

## Local Setup

+ Run `npm install` to get `node_modules`
+ Run `gulp data` to download the budget JSON (ignored by Git)
+ Run `gulp` to compile the CSS & JavaScript
+ Run `gulp watch` to watch for changes to `.sass` and `.js` files

## Editing Styles & JavaScript

+ **Do not** edit files in `assets/css/` or `assets/js/` -- These files are generated by Gulp.
+ Add custom SASS to `assets/scss/app.scss`
+ Add custom JavaScript to `assets/scripts/app.js`
