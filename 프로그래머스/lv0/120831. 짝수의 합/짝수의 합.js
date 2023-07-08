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
    
    // 1.
    // var half = Math.floor(n/2);
    // return half*(half+1);

    // 2.
    for(let i=2 ; i<=n ; i+=2)
        answer += i;

    // 3.
    // Array(n)
    //     .fill()
    //     .map((_, i) => i + 1)
    //     .filter((v) => v % 2 === 0)
    //     .reduce((acc, cur) => acc + cur, 0);
    
}