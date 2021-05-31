// let sumArr = function(arr) {
//     if (arr.length === 1) {
//       return arr[0];
//     }
  
//       return arr.pop() + sumArr(arr);
//     }
  
  
//   console.log(sumArr([1,2,3,4,5,6]));

const numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2,[2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]]
]

const sum = (numbers) => {
  let sumn = 0
  numbers.map((number) => {
      if ( typeof number === "number") sumn += number
      else sumn += sum(number)
  });
  return sumn;
}
console.log(sum(numbers));