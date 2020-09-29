
// You should implement your task here.

module.exports = function towelSort (matrix = 0) {
  if (matrix === 0 || matrix.length === 0)
  return [];

  const length = matrix.flat().length;
  let sortedMatrix = [];
  let innerArrayCount = matrix.length;
  let i = 0;
  let counter = 0;
  while(i < length && counter < innerArrayCount){
    if (counter % 2 === 0){
      for(let j = 0; j < matrix[counter].length; j++, i++)
        sortedMatrix[i] = matrix[counter][j];
    }
    if (counter % 2 !== 0){
      for(let j =  matrix[counter].length - 1; j >= 0; j--, i++)
        sortedMatrix[i] = matrix[counter][j];
    }
    counter++;
  }
  return sortedMatrix;
}
