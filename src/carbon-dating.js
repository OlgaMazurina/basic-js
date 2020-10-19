

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // let numb = 0;

  if (typeof(+sampleActivity) !== 'number' || sampleActivity == null || typeof(+sampleActivity) !== 'string') {
    return false;
  }

  let k = 0.693/HALF_LIFE_PERIOD;
  let t = Math.ceil(Math.log(15/sampleActivity)/k);




  return t;
};
