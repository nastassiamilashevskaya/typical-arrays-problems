
exports.min = function min (array) {
  if (array == undefined){
    return 0;
  }
  if (array.length != 0){
    return Math.min.apply(null, array);
  } else {
  return 0;
  }
}

exports.max = function max (array) {
  if (array == undefined){
    return 0;
  }
  if (array.length != 0){
    return Math.max.apply(null, array);
  } else {
  return 0;
  }
}

exports.avg = function avg (array) {
  if (array == undefined){
    return 0;
  }
  if (array.length != 0){
    return array.reduce((accumulator, currentNumber) => accumulator + currentNumber) / array.length;
  } else {
  return 0;
  }
}
