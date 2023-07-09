function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
/*
    약수는 대칭을 이루는데 제곱근만이 자기 자신과 대칭을 이루기 때문에
    제곱근이 정수면 약수의 개수가 홀수다
    
    제곱근은 어떤 수를 제곱하여 원래의 수를 얻을 수 있는 수를 말합니다.
    제곱근은 주로 수학에서 사용되며, 제곱근 기호로 √(루트 기호)로 나타내기도 합니다.

    예를 들어, 4의 제곱근은 2입니다. 왜냐하면 2를 제곱하면 4가 되기 때문입니다.
    같은 방식으로 9의 제곱근은 3이고, 16의 제곱근은 4입니다.

    제곱근은 실수와 음수, 복소수로 나뉠 수 있습니다.
    양수의 경우, 양의 제곱근과 음의 제곱근이 있을 수 있습니다. 예를 들어, 25의 제곱근은 5와 -5입니다.

    자바스크립트에서는 Math.sqrt() 함수를 사용하여 제곱근을 계산할 수 있습니다.
    Math.sqrt() 함수는 인수로 받은 숫자의 양의 제곱근을 반환합니다.
    
    console.log(Math.sqrt(4)); // 2
    console.log(Math.sqrt(9)); // 3
    console.log(Math.sqrt(16)); // 4
*/
/*
    `Number`는 자바스크립트의 내장 객체로,
    숫자와 관련된 작업을 수행하기 위한 메서드와 속성을 제공하는 역할을 합니다.

    `Number` 객체에는 다양한 내장 메서드와 속성이 있습니다.

    - `Number.isNaN()`: 인수로 전달된 값이 NaN(숫자가 아님)인지를 판별하는 정적 메서드입니다.
    - `Number.isInteger()`: 인수로 전달된 값이 정수인지를 판별하는 정적 메서드입니다.
    - `Number.parseInt()`: 문자열을 정수로 변환하는 정적 메서드입니다.
    - `Number.parseFloat()`: 문자열을 부동 소수점 수로 변환하는 정적 메서드입니다.
    - `Number.MAX_VALUE`: JavaScript에서 표현 가능한 가장 큰 숫자 값을 나타내는 속성입니다.
    - `Number.MIN_VALUE`: JavaScript에서 표현 가능한 가장 작은 양수 값을 나타내는 속성입니다.
    - 그 외에도 `Number.prototype` 객체에는 숫자와 관련된 다양한 메서드와 속성들이 포함되어 있습니다.    예를 들어, `toFixed()`, `toPrecision()`, `toExponential()` 등이 있습니다.

    `Number` 객체는 숫자와 관련된 연산이나 변환 작업을 수행하기 위해 사용됩니다.
    내장된 메서드와 속성을 활용하여 숫자 관련 작업을 보다 쉽게 처리할 수 있습니다.
*/
/*
    function solution(left, right) {
      let answer = 0;

      for (let i = left; i <= right; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
          if (i % j === 0) count++;
        }
        if (count % 2) answer -= i;
        else answer += i;
      }

      return answer;
    }

*/
