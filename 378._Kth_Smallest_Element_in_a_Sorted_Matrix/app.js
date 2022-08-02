// 378. Kth Smallest Element in a Sorted Matrix
// Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.
// Note that it is the kth smallest element in the sorted order, not the kth distinct element.
// You must find a solution with a memory complexity better than O(n2).

var kthSmallest = function (matrix, k) {
  const newArray = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix.length != matrix[i].length || 1 >= matrix.length >= 300) {
        return false;
      }
      newArray.push(matrix[i][j]);
    }
  }
  let temp = newArray[0];

  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray.length - i - 1; j++) {
      if (newArray[j] > newArray[j + 1]) {
        temp = newArray[j];
        newArray[j] = newArray[j + 1];
        newArray[j + 1] = temp;
      }
    }
  }
  return newArray[k - 1];
};
