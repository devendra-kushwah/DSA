console.log("Array sorting")

// Check index of the array items

const arr = ["a", "b", "c"];
const arr2 = ["one", "two", "three"];
const numArr = [5, 12, 8, 130, 44];


// 1 -------------Search array index---------------------

		const obj = {};

		//  Using entries method 

		/*	for(const [index, item] of arr.entries()){
				obj[item] = index;
			}
			*/

		//  Using for lop without usig any methods

		for(let i = 0; i < arr.length; i++){
			obj[arr[i]] = i;
		}

		//console.log("Items index", obj);

// 2 ----------------Merge two array in single object in key values ------------------

		// const arr = ["a", "b", "c"];
		// const arr2 = ["one", "two", "three"];

		// output : {a: "one", b: "two", c: "three"}

		let result = {};

		for(let i = 0; i < arr.length; i++){
			result[arr[i]] = arr2[i];
		}

		//console.log("merged result", result);
		
// 3 ----------------Hightest array value ------------------
    //const numArr = [5, 12, 8, 130, 44];
	//  output : 130
	
		let highestValue = -1;
		
		for(const value of numArr){
			let num = value;
			console.log('num', num);
			console.log('value', value);
			if(num >= value){
				highestValue = num;
			}
		}

		console.log("highestValuet", highestValue);



