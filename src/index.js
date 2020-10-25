
module.exports = function towelSort(matrix) {
  if (matrix == undefined) return [];
  let counter = 1;
  let array = [];
  for (let item of matrix) {
    if (counter % 2 == 0) item.reverse();
    for (let i = 0; i < item.length; i++) {
      array.push(item[i]);
    }
    counter++;
  }
  return array;
}