function solution(n, k) {
    let answer = 0;
    let drinks;
    drinks = Math.floor(n / 10);
    answer = n * 12000 + k * 2000 - drinks * 2000; 
    return answer;
}
/*
    // drinks = (n % 10 === 0) ? 1 : 0;
    // drinks = parseInt(n / 10);
*/
/*
    Math.floor 버림
    Math.floor(4.7) -> 4
    Math.floor(-2.3) -> -3

    Math.round 반올림
    Math.round(4.7) -> 5
    Math.round(-2.3) -> -2
*/