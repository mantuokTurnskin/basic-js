const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  let initialsPersons = members.map(person => {
    if (typeof person === 'string') {
      person = person.trim();
      return person[0].toUpperCase()};
  });
  if(initialsPersons.length === 0) return false;
  return initialsPersons.sort().join('')
};