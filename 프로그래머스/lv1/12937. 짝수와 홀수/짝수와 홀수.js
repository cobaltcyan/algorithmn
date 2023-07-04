function solution(num) {
    let answer = '';
    let output = parseInt(num);
    
    if (output % 2 === 0) {
        answer = "Even";
    }
    else if (output % 2 === 1 || output % 2 === -1) {
        answer = "Odd";
    }
    else if (output === 0) {
        answer = "Even";
    }
    else
        answer = ""
    
    return answer;
}