function solution(absolutes, signs) {
    let answer = 123456789;
    let sum = 0;
    
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            sum = sum + absolutes[i];
        } else {
            sum = sum + absolutes[i] * (-1);
        }
    }
    answer = sum;
    
    return answer;
}