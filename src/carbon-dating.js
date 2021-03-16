const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !=='string') return false;
  sampleActivity = Number(sampleActivity);
  if(Number.isNaN(sampleActivity)) return false;
  if(sampleActivity <= 0 || sampleActivity > 15) return false;
  const result = Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / 0.693;
  return Math.ceil(result);
};
