  
/*Implement a function
 secondLargest(arr) that takes
an array of numbers and 
returns the second
 largest number.*/


function secondLargest(arr) {

  const maxNumber = Math.max(...arr);

  const secondNum = arr.filter(el => { return el < maxNumber;} );

 return Math.max(...secondNum);

 
}

module.exports = secondLargest
secondLargest([6,3,0,30,7]);
secondLargest([71, 33, 3, 51, 18, 6]);
