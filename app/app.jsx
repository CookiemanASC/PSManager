var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var TeacherPanel = require('TeacherPanel');
var ImportStudents = require('ImportStudents');
var ExportStudents = require('ExportStudents');
var ViewStudents = require('ViewStudents');
var CreateWelcome = require('CreateWelcome');
var ExportStudentProgress = require('ExportStudentProgress');
var StudentPanel = require('StudentPanel');

//Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="/Teacher" component={TeacherPanel}>
          <Route path="/ImportStudents" component={ImportStudents} />
          <Route path="/ExportStudents" component={ExportStudents} />
          <Route path="/ViewStudents" component={ViewStudents} />
          <Route path="/ExportStudentProgress" component={ExportStudentProgress} />
          <Route path="/CreateWelcome" component={CreateWelcome} />        
        </Route>
        <Route path="/Student" component={StudentPanel} />
      </Route>
  </Router>,
  document.getElementById('app')
);
