'use strict';

var React = require('react');
var formatDate = require('../utils/formatdate');

var VacancyItem = React.createClass({
  render: function() {
    var vacancy = this.props.vacancy;
    return (
      <li className="vacancyItem">
        <span className="vacancyTitle"><a href="https://hrm.btvregion.no/tfk_recruitment" target="_blank">{vacancy.title}</a></span>
        <br />
        <span className="vacancyDateDeadline">Søknadsfrist: {formatDate(vacancy.deadline)}</span>
      </li>
    );
  }
});

module.exports = VacancyItem;