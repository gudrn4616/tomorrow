function heapify(arr, length, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, length, largest);
    }
}

function heapSort(arr) {
    let length = arr.length;

    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(arr, length, i);
    }

    for (let i = length - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

// 예시
const arr = [4, 10, 3, 5, 1];
console.log("정렬 전 배열:", arr);
const sortedArr = heapSort(arr);
console.log("정렬 후 배열:", sortedArr);