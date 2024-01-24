function solution(numbers) {
    var answer = 0;
    // return answer;
    numbers.sort((a,b) => a - b);
    console.log(numbers);
    answer = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    return answer;
}