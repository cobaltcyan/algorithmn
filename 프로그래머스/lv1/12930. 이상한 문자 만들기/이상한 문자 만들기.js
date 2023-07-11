function solution(s) {
  let answer = '';
  let arr = s.split(' ');
  answer = arr.map(function(arr2) {
    let word = '';
    for (let i = 0; i < arr2.length; i++) {
      if (i % 2 === 0) {
        word += arr2[i].toUpperCase();
      } else {
        word += arr2[i].toLowerCase();
      }
    }
    return word;
  });
  answer = answer.join(' ');
  return answer;
}