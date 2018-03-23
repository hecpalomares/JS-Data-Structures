/* Two Dimensional Arrays: Matrix. Created with an array of arrays. */

// Creation
let avgTemperature = [];

avgTemperature[0] = [24, 21, 31, 28, 19, 14];
avgTemperature[1] = [18, 23, 29, 12, 10, 18];

// Diagram equality:
//	      [0] [1] [2] [3] [4] [5] 
//  [0]  [24, 21, 31, 28, 19, 14]
//  [1]  [18, 23, 29, 12, 10, 18]

// Iterating
function printMatrix(myMatrix) {
	console.log("Printing a two dimensional array...");
	// i index represents rows. j index represent columns.
	for(let i = 0; i < myMatrix.length; i++) {
		for(let j = 0; j < myMatrix[i].length; j++) {
			console.log(myMatrix[i][j]);
		}
		console.log(`End of row:${i}`);
	}
}



printMatrix(avgTemperature);

/* Multi Dimensional Array: Created with row, column and depth. */

// Creation
let matrix3x3x3 = [];

for(let i = 0; i < 3; i++) {
	matrix3x3x3[i] = [];

	for(let j = 0; j < 3; j++) {
		matrix3x3x3[i][j] = [];

		for(let z = 0; z < 3; z++) {
			matrix3x3x3[i][j][z] = i+j+z;
		}
	}
}

// Iterating
function printCube(myMatrix) {
	console.log("Printing a three dimensional array...");
	// i index represents rows. j index represent columns, z index is depth
	for(let i = 0; i < myMatrix.length; i++) {
		for(let j = 0; j < myMatrix[i].length; j++) {
			for(let z = 0; z < myMatrix[i][j].length; z++) {
				console.log(myMatrix[i][j][z]);
			}
			console.log(`Ending column:${j}`);
		}
		console.log(`Ending row:${i}`);
	}
}

printCube(matrix3x3x3);

