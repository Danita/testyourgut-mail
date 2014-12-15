# Testyourgut.com results email

This email is based on [Zurb's Ink](http://zurb.com/ink/) responsive email boilerplate. It is provided with a builder script in order to inline all CSS styles into the resulting HTML for maximum compatibility with all email clients. 

## Dependencies

* [Ruby](https://www.ruby-lang.org/) and Rubygems
* [NodeJS](http://nodejs.org/) and NPM
* [GulpJS](http://gulpjs.com/)

## Installing

Clone this repo to any directory and execute:

	gem install premailer
	gem install nokogiri
	npm install

Open `gulpfile.js` and modify the absolute path to the directory on the server or CDN where the final images will be hosted, on line 5:

	var cdnUrl = "http://example.com/"; 

## Building

The email itself is a simple HTML file (`index.html`). This file has linked the Ink CSS framework and the custom Hyperbiotics styles, and it's developer readable. You can just open it with the browser and preview it. Be sure to open it with an editor and read all FIXMEs and TODOs. 

You should make all intended changes in this file and when it's ready to export just run the building process:

	gulp build

This will leave a copy of `index.html` in the `/dist` directory with all styles inlined in the HTML and it's the one you should be using as a template in the application which will send this email to the users.

