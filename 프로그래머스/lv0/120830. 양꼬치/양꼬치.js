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
/*
    // 비트연산자 ~~ 사용
    
    function solution(n, k) {
        k-=~~(n/10);
        if (k < 0) k = 0;
        return n*12000+k*2000;
    }
    
    비트 연산자인 ~~를 사용하여 정수 부분을 구하는 방법은 실수를 정수로 변환할 때
    소수점 이하를 버리는 간단한 방법 중 하나입니다.

    ~~는 JavaScript에서 사용되는 비트 NOT 연산자를 두 번 쓴 것으로,
    일반적으로 "Double NOT"이라고도 합니다.
    이 연산자는 숫자를 32비트 부호 있는 정수로 변환한 뒤
    다시 32비트 부호 없는 정수로 변환하여
    결과를 돌려줍니다.
    이러한 과정으로 소수점 이하를 버리고 정수 부분만을 남기게 됩니다.
*/
