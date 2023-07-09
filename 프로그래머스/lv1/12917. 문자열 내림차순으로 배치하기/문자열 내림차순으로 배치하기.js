function solution(s) {
    let answer = '';
    if (s.length >= 1) {
        answer = s.split('').sort().reverse().join('');
        console.log(answer);
    }
    
    return answer;
}
/*
    s.split('').sort((a, b) => {
        return b - a;
    }).join('');
*/
