'use strict';

var React = require('react');
var VacancyItem = require('./VacancyItem');

var VacanciesList = React.createClass({
  render: function() {
    var limitLength = parseInt(this.props.limitLength || 20, 10);

    return (
      <ul className="vacanciesList">
      {this.props.allVacancies.slice(0, limitLength).map(function(vacancy){
        return <VacancyItem vacancy={vacancy} key={vacancy.jobid} />;
      })}
      </ul>
    );
  }
});

module.exports = VacanciesList;