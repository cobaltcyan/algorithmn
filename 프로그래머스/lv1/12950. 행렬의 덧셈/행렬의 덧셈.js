// function solution(arr1, arr2) {
//     let answer = [[]];
//     let sum = [[0, 0], [0, 0]];
    
//     // for (let i = 0; i < arr1.length; i++) {
//         for(let j = 0; j < arr2.length; j++) {
//             sum = sum + [arr1[i, j] + arr2[i, j], arr1[]
//         }
//     // }
//     return answer;
// }

function solution(arr1, arr2) {
    const row = arr1.length; // 행의 개수
    const col = arr1[0].length; // 열의 개수
    const answer = [];
    
    for (let i = 0; i < row; i++) {
        const sumRow = [];
        for (let j = 0; j < col; j++) {
            const sum = arr1[i][j] + arr2[i][j]; // 같은 행, 같은 열의 값 더하기
            sumRow.push(sum);
        }
        answer.push(sumRow);
    }
    
    return answer;
}