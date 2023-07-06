function solution(x) {
    let answer = true;
    let arr = x.toString().split('');
    let sum = 0;
    
    if (x % 1 === 0) {
        for (let i = 0; i < arr.length; i++) {
            sum = sum + parseInt(arr[i]);
        }

        if (x % sum === 0) {
            answer = true;
        }
        else
            answer = false;
    }

    return answer;
}