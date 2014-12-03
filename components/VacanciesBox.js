'use strict';

var React = require('react');
var $ = require('jquery');
var VacanciesList = require('./VacanciesList');

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
        <VacanciesList allVacancies={this.state.allVacancies} limitLength="4" />
      </div>
    );
  }
});

module.exports = VacanciesBox;