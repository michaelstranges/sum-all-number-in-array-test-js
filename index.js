

function sumItems(array) {
  let mySum = 0;
  // Sum all the numbers in the array
  array.forEach(function(num){
    if(Array.isArray(num)){
      mySum += sumItems(num)
    } else {
      mySum += num;
    }
  });
return mySum;
}

console.log(sumItems([1, 2, 3, 4, 5]));
console.log(sumItems([[1, 2, [[3], 4]], 5, []]));


module.exports = sumItems;