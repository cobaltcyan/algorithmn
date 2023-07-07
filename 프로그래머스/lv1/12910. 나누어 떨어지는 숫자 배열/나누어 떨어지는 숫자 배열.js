function solution(arr, divisor) {
    let answer = [];
    let output = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            output.push(arr[i]);
        }
    }
    if (output.length === 0)
        output.push(-1);
    
    
    answer = output.sort(function(a, b) {
        return a - b;
    });
    
    console.log(answer);
    return answer;
}