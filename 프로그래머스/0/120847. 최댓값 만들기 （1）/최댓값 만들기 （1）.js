function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b) => a - b);
    answer = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    return answer;
}

// 내림차순
// function solution(numbers) {
//     numbers.sort((a, b) => b - a);
//     return numbers[0]*numbers[1];
// }

// 구조분해할당 방법
// function solution(numbers) {
//     let [a, b] = numbers.sort((a,b) => b - a);
//     return a * b;
// }
