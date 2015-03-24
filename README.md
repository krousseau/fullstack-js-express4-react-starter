# fullstack-js-express4-react-starter

A starter app using a pretty typical NodeJs stack w/ a postgreSql backend. Below is a rundown of the tool stack that is used.

## Getting Started
- go to config/config.json and update the database credentials
- run "npm install"
- run "gulp build"
- Install the following globally:
-- npm install -g sequelize-cli
-- npm install -g webpack
-- npm install -g eslint
- start the web server using "npm start"

## Build w/ Gulp & Webpack
- Using gulp for compiling sass instead of webpack because I do not want the css to have a dependency on javascript. The webpack way of doing css involves requiring as part of the js, which just seems silly to me.
- Gulp task for building w/ webpack and webpack watch using the gulp-webpack-build package.
- Webpack is used to build the js and publish to public/js/app.js
-- eslint loader uses .eslintrc file for configuration to run linting on build
-- babel is used for jsx compiling and ES6 features
- eslint is run server side with gulp task using eslint-server.json as config

## Express
- server.js is the entry point
- routes are defined inside of the routes folder
- config files, passport config and role/securable mappings are in the config folder
- Server side templates w/ Jade

## Authentication w/ passportjs
- Uses local strategy and stores in the users table
- The strategies are defined in config/passport.js
-- 2 strategies are defined - 1 for signup and 1 for login

## Authorization w/ mustbe

## Sequelize ORM w/ Postgres
- Sequelize migrations to keep sane database updating
-- create new migrations by running the command "sequelize migration:create"
-- there are a couple of ways to run the migrations
--- gulp build
--- sequelize db:migrate
-- See http://docs.sequelizejs.com/en/latest/docs/migrations/ for more details
- Add new models inside of the models folder. The index.js file scans the directory and exports them. You can include them with var models = require('./models'). The models will all be hanging off of that object.

## Styles using Kraken library and sass
- Kraken is a lightweight mobile-first boilerplate
-- http://cferdinandi.github.io/kraken/#getting-started
- I haven't added any styles yet, but all styles can be added to front-end/src/css/app.scss. Currently just includes Kraken styles
- sass is compiled as part of gulp build and published to public/css/app.css

## React w/ Flux Architecture
- Really just included the dependency and included as part of the webpack build

## Heroku
- The app is running at heroku (// TODO: INSERT URL HERE). In its current state it's easy to deploy to a heroku instance. See heroku for node for more details about deploying there.