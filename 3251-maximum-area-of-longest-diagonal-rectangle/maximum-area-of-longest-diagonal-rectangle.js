/**
 * @param {number[][]} dimensions
 * @return {number}
 */
/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    // Get the number of rectangles
    const n = dimensions.length;

    // Initialize variables to keep track of maximum area and diagonal
    let maxArea = 0;
    let maxDiag = 0;

    // Iterate through each rectangle
    for (let i = 0; i < n; i++) {
        // Get the length and width of the current rectangle
        const l = dimensions[i][0];
        const w = dimensions[i][1];

        // Calculate the square of the diagonal length
        const currDiag = l ** 2 + w ** 2;

        // Compare the current diagonal with the maximum diagonal encountered so far
        // If the current diagonal is greater, or if it's equal but the area is greater,
        // update maxDiag and maxArea accordingly
        if (currDiag > maxDiag || (currDiag === maxDiag && l * w > maxArea)) {
            maxDiag = currDiag;
            maxArea = l * w;
        }
    }

    // Return the maximum area of the rectangle with the longest diagonal
    return maxArea;
};