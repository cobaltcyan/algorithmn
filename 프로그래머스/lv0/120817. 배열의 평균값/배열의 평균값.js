function solution(numbers) {
    let answer = 0;
    answer = numbers.reduce((acc,cur) => acc + cur, 0) / numbers.length;
    return answer;
}

/*
function solution(numbers) {
    var answer = 0;
    for(i of numbers) {
        answer += i
    }
    return answer / numbers.length;

}
*/
/*
function solution(numbers) {
    let answer = 0;    
    answer = numbers.reduce(function(acc,cur) {
        return acc += cur;
    }, 0);
    answer = parseFloat(answer / numbers.length);
    return answer;
}

*/
