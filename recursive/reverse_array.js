function reverseArray(arr, start, end) {
  if (start < end) {
    const tmp = arr[start];
    console.log(tmp);
    arr[start] = arr[end];
    arr[end] = tmp;
    reverseArray(arr, start + 1, end - 1);
  }
}

const test = [1, 2, 3];

reverseArray(test, 0, test.length - 1);
console.log(test);
