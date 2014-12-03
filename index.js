'use strict';

var React = require('react');
var VacanciesBox = require('./components/VacanciesBox');

React.render(
  <VacanciesBox source="http://ws.t-fk.no/?resource=recruitments&search=all&format=json" />,
  document.getElementById('vacancies')
);