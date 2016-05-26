var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

// Load Foundation 5
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}/>
    </Router>,
    document.getElementById('app')
  );