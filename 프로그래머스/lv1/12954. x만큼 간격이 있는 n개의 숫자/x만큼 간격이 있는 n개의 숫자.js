function solution(x, n) {
    let answer = [];
    
    for (let i = 0; i < n; i++) {
        
        if (x < -10000000 || x > 10000000)
            break;

        if (n < 0 || n > 1000)
            break;
        
        answer[i] = (i + 1) * x;
    }
        
        
    return answer;
        
}