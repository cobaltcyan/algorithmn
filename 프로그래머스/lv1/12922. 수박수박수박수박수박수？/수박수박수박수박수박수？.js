function solution(n) {
    let answer = '';
    let output = '';
    console.log(n);
    // console.log(n.length);           // undefined
    // console.log(n.value.length);     // error
    if (n > 0 && n <= 10000) {
        for (let i = 0; i < n; i++) {
            if (i % 2 === 0) {
                output = output + '수';
            } else {
                output = output + '박';
            }
        }
    }
    answer = output;
    return answer;
}

/*
    여기서 "길이 10,000 이하인 자연수"는 일반적으로 숫자의 자릿수를 의미하는 것이 아닙니다.
    대신, n은 자연수를 나타내는 변수이며, 그 값은 10,000 이하여야 한다는 것입니다.
    즉, n은 1 이상 10,000 이하의 양의 정수를 가질 수 있다는 의미입니다.
*/