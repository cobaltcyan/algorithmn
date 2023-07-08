function solution(n) {
    let answer = 0;
    let sum = 0;
    
    if (0 <= n && n <= 1000) {
        for (let i = 0; i <= parseInt(n / 2); i++) {
            sum = sum + 2 * i;
        }
    }
    answer = sum;
    console.log(answer);
    return answer;
}