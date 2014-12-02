'use strict';

var React = require('react');
var $ = require('jquery2');

var VacancyItem = React.createClass({
  render: function() {
    var vacancy = this.props.vacancy;
    return (
      <li>
      <a href="https://hrm.btvregion.no/tfk_recruitment" target="_blank">{vacancy.title}</a>
      </li>
    );
  }
});

var VacanciesList = React.createClass({
  render: function() {
    return (
      <ul>
      {this.props.allVacancies.map(function(vacancy){
        return <VacancyItem vacancy={vacancy} key={vacancy.jobid} />;
        })}
        </ul>
    );
  }
});


var VacanciesBox = React.createClass({
  getInitialState: function() {
    return {allVacancies:[]};
  },

  componentDidMount: function() {
    $.get(this.props.source, function(data) {
      var allVacancies = data.results;
      if (this.isMounted()) {
        this.setState({
          allVacancies:allVacancies
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div className="vacanciesBox">
        <VacanciesList allVacancies={this.state.allVacancies} />
      </div>
    );
  }
});

React.render(
  <VacanciesBox source="http://ws.t-fk.no/?resource=recruitments&search=all&format=json" />,
  document.getElementById('vacancies')
);