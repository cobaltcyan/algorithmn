function solution(num1, num2) {
    let answer = 0;
    if (num1 % 1 === 0 && num2 % 1 === 0) {
        answer = num1 - num2;
    }
    return answer;
}