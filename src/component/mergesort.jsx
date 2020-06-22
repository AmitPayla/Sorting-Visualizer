const animate = []
let x ;
const auxarray = [];
export function mergesorting(value, mainarray , flag) {
  
  if (flag === 1) {
    var y = mainarray.keys();
    for (x of y) {
      auxarray.push(x);
    }
    animate.splice(0,animate.length);
    mainarray.splice(0, mainarray.length);
    mainarray = [...auxarray];
    auxarray.splice(0 , auxarray.length);
    flag++;
  }
  var midlength = parseInt(value.length / 2);
  if (value.length < 2) {
    return;
  }
  var left = [];
  var right = [];
  var leftindex = [];
  var rightindex = [];
  for (var i = 0; i < midlength; i++) {
    left[i] = value[i];
    leftindex[i] = mainarray[i];
  }
  for (i = midlength; i < value.length; i++) {
    right[i - midlength] = value[i];
    rightindex[i - midlength] = mainarray[i];
  }
  mergesorting(left, leftindex);
  mergesorting(right, rightindex);
  mergesort(left, right, value, midlength, leftindex, rightindex, mainarray);
  return animate;
}

function mergesort(
  left,
  right,
  value,
  midlength,
  leftindex,
  rightindex,
  mainarray
) {
  var i = 0,
    j = 0,
    k = 0,
    lindx,
    rindx;
  lindx = leftindex[0];
  rindx = rightindex[0];
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      value[k] = left[i];
      animate.push([value[k], mainarray[k], leftindex[i], rindx]);
      lindx = leftindex[i];
      i++;
    } else {
      value[k] = right[j];
      animate.push([value[k], mainarray[k], lindx, rightindex[j]]);
      rindx = rightindex[j];
      j++;
    }
    k++;
  }
  while (i < left.length) {
    value[k] = left[i];
    animate.push([value[k], mainarray[k], leftindex[i], rindx]);
    i++;
    k++;
  }
  while (j < right.length) {
    value[k] = right[j];
    animate.push([value[k], mainarray[k], lindx, rightindex[j]]);
    j++;
    k++;
  }
}
