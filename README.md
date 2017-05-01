# nodeschool

> This is description

## How to install

Prerequisites (worked for me)
* [Node.js](http://nodejs.org/) >=4.8.2  

* [Bower](http://bower.io/)

Installation process:
1. Clone this repository
2. Run ```npm install``` to install dependencies
3. Run ```bower install``` to install front-end dependencies

## Usage

For project development with livereload run:
```
gulp serve
```

To build project run: (Result will be in ```dist/``` folder.)
```
gulp build [--force]
```

To serve built project run:
```
gulp serve:dist
```

Gulp help:
```
gulp help
```

## Deploy to gh-pages

1. Commit `dist/`
2. Run `git subtree push --prefix dist origin gh-pages`

## Views data

Edit files in `app/views/data/` to change content of website.

## Built-in features

* CSS autoprefixing
* Webserver with liverelaod
* Jade compilation
* Sass compilation
* CSS/JS concating and minification
* JS linting
* Automatic wiring up Bower components
* Image optimaliztion
* Lean Modernizr builds
* Improved file caching
* Deploying via rsync/sftp


---

Project structure was generated by [generator-lb](https://github.com/lightingbeetle/generator-lb) using version 3.0.2.  

[![Lighting Beetle](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Lighting Beetle")](http://www.lbstudio.sk)
