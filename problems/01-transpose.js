/*
    Transpose
    Write a function transpose(arr) that accepts a two-dimensional array
    and returns a new version of the array with its columns and rows switched.
    See examples below:

    let arr1 = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
               ]

    console.log(transpose(arr1)); //prints: [
                                             [1, 4, 7],
                                             [2, 5, 8],
                                             [3, 6, 9]
                                            ]

    let arr2 = [
                [1, 2],
                [3, 4],
                [5, 6],
               ]

    console.log(transpose(arr2)); // prints: [
                                              [1, 3, 5],
                                              [2, 4, 6]
                                             ]

*/

function transpose(arr) {
    let matrix = [];
    let numCols = arr[0].length;
    let numRows = arr.length;

    for (let col = 0; col < numCols; col++) {
        let newRow = [];
        for (let row = 0; row < numRows; row++) {
            newRow.push(arr[row][col])
        }
        matrix.push(newRow);
    }
    return matrix;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = transpose;
} catch (e) {
    module.exports = null;
}
