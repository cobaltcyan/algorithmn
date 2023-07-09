function solution(a, b) {
    var answer = 1234567890;
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i] * b[i];
    }
    answer = sum;
    return answer;
}
/*
    return (a,b)=>a.reduce((a,c,i) => a+c*b[i], 0);
    
    a.reduce((a, c, i) => a + c * b[i], 0): a 배열의 reduce() 메서드를 호출하여 누적 합산을 수행
    
    a: 이전 누적 값
    c: 현재 배열 요소
    i: 현재 인덱스
    b[i]: b 배열의 현재 인덱스에 해당하는 요소
    a + c * b[i]: 이전 누적 값에 c와 b[i]를 곱한 값을 더합니다.
    0: 초기 누적 값으로 0을 설정합니다.
*/
