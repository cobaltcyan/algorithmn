function solution(n) {
    let answer = 0;
//     let sqrt = Math.sqrt(n);
    
    
//     // if (n % 1 === 0) {
//     if (Number.isInteger(n)) {
//         if (sqrt * sqrt === n)
//             answer = Math.pow((sqrt + 1), 2);
//         else
//             answer = -1;
//     }
    
//     return answer;
    
    
    
    let num = Math.sqrt(n);
    if(num % 1 === 0 ) return (num+1) * (num+1)
    else return -1
}