function solution(a, b) {
    
    let answer = 0;
    let arr = [a, b];
    let sum = 0;
    
    arr.sort(function (a, b) {
        return a - b;
    });

    while (arr[0] <= arr[1]) {
        sum = sum + arr[0];
        arr[0] += 1;
    }
    console.log(arr);
    console.log(sum);
    answer = sum;
    return answer;
    
    // 1. 가우스의 공식 
    // return (a+b) * (Math.abs(a-b)+1) / 2;

    // 2. 
    // function adder(a, b, s = 0){
    //   for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
    //   return s;
    // }
    // console.log( adder(3, 5) )

}