var
  phone = require('phone'),
  _ = require('lodash'),
  areacodes = require('./data/areacodes.json'),
  states = require('./data/states.json')
  ;

function validateAndNormalizeNumber(num) {
  var
    numData = phone(num),
    number = numData.length > 0 ? numData[0] : false,
    country = numData.length > 0 ? numData[1] : ''
    ;

  if(!number) {
    throw new Error('Invalid number format (does not align with E.164)');
    return false;
  }
  // Only supporting US based area codes for now
  if(country !== 'USA') {
    throw new Error('Number (' + number + ') is not a valid USA number. ('+country+')');
    return false;
  }

  return number;
}

var AreaCode = {

  // Pull info on specific Area Code
  // byCode(###)
  byCode : function(code) {
    return _.find(areacodes, {'areacode': code});
  },

  // By phone number, can handle most phone formats
  // leverages teh node-phone package so it should normalize well
  //  - www.npmjs.com/package/phone
  //  - https://github.com/aftership/node-phone
  //
  byNumber : function(num) {
    var number = validateAndNormalizeNumber(num);
    if(number) {
      var code = AreaCode.extractFromNumber(number);
      return AreaCode.byCode(code);
    }
    return false;
  },

  // Extracts the area code from most number formats
  // uses the same method as byNumber to normalize
  extractFromNumber : function(num) {
    var number = validateAndNormalizeNumber(num);
    if(number) {
      return number.slice(2,5);
    }
    return false;
  }
};


module.exports = AreaCode;