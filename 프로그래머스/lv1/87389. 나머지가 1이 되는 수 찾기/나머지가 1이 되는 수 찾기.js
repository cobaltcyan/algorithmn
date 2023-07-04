function solution(n) {
    let answer = 0;
    
    if (n >= 3 || n <= 1000000) {
        for (let x = 1; x < n; x++) {
            if (n % x === 1) {
                answer = x;
                break; 
            }
        }
    }
    return answer;
}