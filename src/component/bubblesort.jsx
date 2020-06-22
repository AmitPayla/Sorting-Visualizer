export function bubbleSorting(value) {
  const animation = [];
  for (let i = 0; i < value.length; i++) {
    for (var j = 0; j < value.length - 1 - i; j++) {
      if (value[j] <= value[j + 1]) {
        animation.push([j, j + 1, "S" , "S" , "0"]);
      } else {
        var temp1 = value[j + 1];
        var temp2 = value[j];
        animation.push([j, j + 1, temp1, temp2, "0"]);
        value[j + 1] = value[j];
        value[j] = temp1;
      }
    }
    animation.push([Math.abs(j-1), j, temp1, temp2 , "changeColor"]);
  }
  return animation;
}
