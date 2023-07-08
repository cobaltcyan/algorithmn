function solution(arr) {
    let answer = [];
    let min = '';
    // let minIndex = 0;
    if (arr.length <= 1) {
        answer = [-1];
    } else {
        min = Math.min(...arr);
        // minIndex = arr.indexOf(min);
        answer = arr.filter((num) => num !== min);
    }
    return answer;
}

    /*
    // 참고
    min = Math.min(arr);
    
    주어진 코드에서 NaN이 출력되는 이유는 Math.min() 함수에 올바른 인수를 전달하지 않았기 때문.
    Math.min() 함수는 개별적인 인수를 받아 최솟값을 반환합니다.
    그러나 배열을 직접 전달하면 NaN 값을 반환합니다.

    해당 문제를 해결하기 위해 Math.min() 함수를 올바르게 사용하려면
    전개 연산자 ...를 사용하여 배열의 각 요소를 개별 인수로 전달해야 합니다.
    */