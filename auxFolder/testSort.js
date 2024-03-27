function createRandomArray() {
   let arr = [1, 2, 3, 4, 5];
   return arr.sort(() => Math.random() - 0.5);
}

console.log(createRandomArray())