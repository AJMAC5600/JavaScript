function fibo(n) {
  let arr = [1, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

function printFibonacciTriangle(rows) {
  let series = fibo(rows * rows);
  let index = 0;

  for (let i = 1; i <= rows; i++) { // Start loop from 1
    let line = [];
    
    // First half of the row (including the middle element)
    for (let j = 0; j < i; j++) {
      line.push(series[index]);
      index++;
    }

    // Add the mirrored part of the row
    let mirrored = line.slice(0, i - 1).reverse();
    line = line.concat(mirrored);

    console.log(line.join(" "));
  }
}

printFibonacciTriangle(5);
