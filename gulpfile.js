const hub = require('gulp-hub');

// handle enviromental variables in .env file
require('dotenv').config({ silent: true });

hub('./node_modules/light-scripts/gulpfile.js');
