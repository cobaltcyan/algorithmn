// function solution(s, n) {
//     let answer = '';
//     let arr = s.trim().split('/\s+/');
//     console.log(arr);
    
//     arr.map(function(a, b) { return a + n; });
//     console.log(arr);
    
//     return answer;
// }

function solution(s, n) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // 알파벳인 경우
    if (/[a-zA-Z]/.test(char)) {
      let ascii = char.charCodeAt(0);
      let base = (char === char.toLowerCase() ? 97 : 65);
      ascii = ((ascii - base + n) % 26) + base;
      answer += String.fromCharCode(ascii);
    }
    else {
      answer += char;
    }
  }

  return answer;
}