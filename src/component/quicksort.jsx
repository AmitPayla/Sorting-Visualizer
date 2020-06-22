var animate = [],
  y = 0,
  x = 0,
  auxillaryarray = [];
export function quicksort(mainarray, low, high, auxarray, flag) {
  if (low < high) {
    if (flag === 1) {
      y = auxarray.keys();
      for (x of y) {
        auxillaryarray.push(x);
      }
      auxarray.splice(0, auxarray.length);
      auxarray = [...auxillaryarray];
      animate.splice(0, animate.length);
      flag++;
    }

    var pivotindex = partition(mainarray, low, high, auxarray);
    quicksort(mainarray, low, pivotindex - 1, auxarray);
    quicksort(mainarray, pivotindex + 1, high, auxarray);
  }
  return animate;
}

function partition(mainarray, low, high, auxarray) {
  var pivot = mainarray[low];
  var auxpivot = auxarray[low];
  var pivotindex = high;
  var i = low;
  while (i < pivotindex) {
    i++;
    if (i % 2 && i % 3)
      animate.push([i, low, pivotindex, mainarray[i], mainarray[pivotindex]]);
    if (mainarray[i] > pivot) {
      while (mainarray[pivotindex] > pivot) {
        pivotindex--;
        if (pivotindex % 2 && pivotindex % 3)
          animate.push([
            i,
            low,
            pivotindex,
            mainarray[i],
            mainarray[pivotindex],
          ]);
      }
      if (pivotindex > i) {
        [mainarray[i], mainarray[pivotindex]] = [
          mainarray[pivotindex],
          mainarray[i],
        ];
        animate.push([i, low, pivotindex, mainarray[i], mainarray[pivotindex]]);
      }
    }
  }
  [mainarray[low], mainarray[pivotindex]] = [
    mainarray[pivotindex],
    mainarray[low],
  ];
  animate.push([low, low, pivotindex, mainarray[low], mainarray[pivotindex]]);

  return pivotindex;
}
