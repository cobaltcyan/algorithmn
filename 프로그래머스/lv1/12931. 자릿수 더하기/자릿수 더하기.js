function solution(n)
{
    let answer = 0;
    answer = parseInt(n);
    console.log(answer);
    
    let arr = answer.toString().split('');
    // console.log(arr);
    // console.log(arr[0]);
    // console.log(arr[1]);
    // console.log(arr[2]);
    // console.log(arr.length);
    
    answer = 0;
    
    for (let i = 0; i < arr.length; i++) {
        answer = answer + parseInt(arr[i]);
    }
    
    return answer;
}