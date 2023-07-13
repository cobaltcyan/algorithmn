// function solution(number) {
//     let answer = 0;
//     let sum = 0;
//     number.sort(function(a,b) { return a-b; });
//     console.log(number);
    
//     sum = number.reduce(function(acc, cur) { return acc + cur }, 0);
//     console.log(sum);
    
//     return answer;
// }

function solution(number) {
  let answer = 0;
  const n = number.length;

  // 정수 번호 배열 정렬
  number.sort((a, b) => a - b);

  // 조합 생성 함수
  function generateCombination(start, sum, count) {
    // 삼총사인 경우 answer 증가
    if (count === 3 && sum === 0) {
      answer++;
    }

    // 재귀적으로 조합 생성
    for (let i = start; i < n; i++) {
      generateCombination(i + 1, sum + number[i], count + 1);
    }
  }

  // 조합 생성 함수 호출
  generateCombination(0, 0, 0);

  return answer;
}



// function solution(number) {
//     let result = 0;

//     const combination = (current, start) => {
//         if (current.length === 3) {
//             result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
//             return;
//         }

//         for (let i = start; i < number.length; i++) {
//             combination([...current, number[i]], i + 1);
//         }
//     }
//     combination([], 0);
//     return result;
// }

// // 서로 다른 사람 3명을 필요로하므로
// // 조합 활용 => 3명이 존재 => 그 합을 구하여 0이면 count++;
// // combination 함수 사용
