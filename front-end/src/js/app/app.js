'use strict';
var React  = require('react');
var Hello  = require('./components/Hello.jsx');

React.render(
    React.createElement(Hello, null),
    document.getElementById('react-app')
);
