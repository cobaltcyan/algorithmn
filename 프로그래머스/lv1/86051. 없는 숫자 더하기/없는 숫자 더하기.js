function solution(numbers) {
    let answer = -1;
    let sum = 0;
    for (let i = 0; i <= 9; i++) {
        if (!numbers.includes(i)) {
          sum += i;
        }
    }
    answer = sum;
    return answer;
}