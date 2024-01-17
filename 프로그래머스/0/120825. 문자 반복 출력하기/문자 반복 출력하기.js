function solution(my_string, n) {
    let answer = '';
    
    // 문자열을 배열로 분해
    let arr = my_string.split('');
    
    // 문자열 분해하여 한 줄씩 출력
    // for(let i = 0; i < my_string.length; i++) {
    //     console.log(arr[i]);
    //     answer = answer.concat(" ", arr[i]);
    // }
    
    // 배열 분해
    for (let i = 0; i < arr.length; i++) {
        // 한 줄로 arr 배열 내용 출력
        // answer += arr[i];
        
        // 각 문자마다 주어진 숫자만큼 반복하여 출력
        for (let j = 1; j <= n; j++) {
            answer += arr[i];        
        }
    }
    
    console.log(answer);
    return answer;   
}