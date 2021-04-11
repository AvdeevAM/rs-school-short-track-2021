/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = matrix.slice();
  for (let i = 0; i < matrix.length; i++) {
    res[i] = new Array(0);
    for (let j = 0; j < matrix[i].length; j++) {
      res[i][j] = 0;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    if (Array.isArray(matrix[i]) === true) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[i][j] === true) {
          // строки есть снизу
          if (matrix.length - i > 1 && i === 0) {
            res[i + 1][j]++;
            if (matrix[i].length - j > 1) {
              res[i][j + 1]++;
              res[i + 1][j + 1]++;
            }
            if (j > 0) {
              res[i][j - 1]++;
              res[i + 1][j - 1]++;
            }
          }
          // строки есть сверху и снизу
          if (matrix.length - i > 1 && i > 0) {
            res[i - 1][j]++;
            res[i + 1][j]++;
            if (matrix[i].length - j > 1) {
              res[i][j + 1]++;
              res[i - 1][j + 1]++;
              res[i + 1][j + 1]++;
            }
            if (j > 0) {
              res[i][j - 1]++;
              res[i + 1][j - 1]++;
              res[i - 1][j - 1]++;
            }
          }
          // строки есть сверху
          if (matrix.length - i === 1 && i > 0) {
            res[i - 1][j]++;
            if (matrix[i].length - j > 1) {
              res[i][j + 1]++;
              res[i - 1][j + 1]++;
            }
            if (j > 0) {
              res[i][j - 1]++;
              res[i - 1][j - 1]++;
            }
          }
        }
      }
    } else if (matrix[i] === true) {
      // только одна строка во всей матрице
      if (matrix.length - i > 1) {
        res[i + 1]++;
      }
      if (i > 0) {
        res[i - 1]++;
      }
    }
  }
  return res;
}

module.exports = minesweeper;
