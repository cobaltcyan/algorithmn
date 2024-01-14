function solution(array) {
    let answer = 0;
    
    // 배열을 변경시킴(문자열 취급 후 오름차순으로 정렬)
    // array.sort();   
    
    // 값을 비교할 수 있도록 함수를 넣어줘서 정렬
    array.sort(function(a, b) {
        return a - b;
    })
    
    let i = array.length / 2;
    i = Math.floor(i);
    
    answer = array[i];
    return answer;    
}

// 테스트 코드 작성
let exampleArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(solution(exampleArray));

