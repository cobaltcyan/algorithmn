// function solution(d, budget) {
//   d.sort((a, b) => a - b);

//   let sum = 0;
//   let i = 0;

//   while (sum <= budget) {
//     sum += d[i];
//     i++;
//   }

//   return i - 1;
// }

function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}

// function solution(d, budget) {
//     let answer = 0;
    
//     let sum = d.reduce((acc, cur, idx) => { return acc += cur;}, 0);
//     answer = d.length;
    
//     if (sum !== budget) {
//         console.log(sum);   
//     }
//     return answer;
// }
/*
    최대로 지원 가능한 부서의 수를 구해야 하기 때문에
    신청한 금액이 들어있는 배열 d를 오름차순으로 정렬하고,
    금액의 합이 예산보다 작거나 같을 때까지만 합을 구한다.

    i가 증가된 후 조건문을 판단했을 때 false일 경우 while문이 종료되기 때문에
    i - 1의 값을 반환하면 지원 가능한 물품 수를 구할 수 있다.
*/