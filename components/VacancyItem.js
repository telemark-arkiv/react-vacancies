'use strict';

var React = require('react');

var VacancyItem = React.createClass({
  render: function() {
    var vacancy = this.props.vacancy;
    return (
      <li className="vacancyItem">
        <a href="https://hrm.btvregion.no/tfk_recruitment" target="_blank">{vacancy.title}</a>
      </li>
    );
  }
});

module.exports = VacancyItem;