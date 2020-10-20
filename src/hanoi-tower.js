

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  let min = 2**disksNumber - 1; //минимально количество перемещений
  let time = turnsSpeed/3600;  //количество перемещений за 1 с
  let totalTime = Math.floor(min/time);


  return { turns: min, seconds: totalTime };

};
