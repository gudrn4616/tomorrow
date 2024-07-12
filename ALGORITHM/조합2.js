function getCombinations(array, n) {
    const result = [];

    // 초기 상태로 빈 배열을 포함한 배열을 생성
    const combinations = Array.from({ length: n + 1 }, () => []);
    combinations[0].push([]);

    for (let item of array) {
        for (let j = n; j > 0; j--) {
            for (let subArray of combinations[j - 1]) {
                combinations[j].push([...subArray, item]);
            }
        }
    }

    return combinations[n];
}

console.log(getCombinations([1, 2, 3, 4], 2));