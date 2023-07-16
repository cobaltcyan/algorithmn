function solution(numbers) {
    let answer = 0;
    answer = numbers.reduce(function(acc,cur) {
        return acc += cur;
    }, 0);
    answer = parseFloat(answer / numbers.length);
    console.log(answer);
    return answer;
}