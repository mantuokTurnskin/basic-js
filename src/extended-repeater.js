const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(!options) return str;
  
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  let addition = (options.addition === undefined)? '' : String(options.addition);


  addition = String(addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
  let result = String(str + addition + separator).repeat(repeatTimes).slice(0, -separator.length);
  return result;
};
  