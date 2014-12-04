'use strict';

function formatDate(inDate){
  var splitDate = inDate.split('-');

  return splitDate[2] + '.' + splitDate[1] + ' ' + splitDate[0];
}

module.exports = formatDate;