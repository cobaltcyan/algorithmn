function solution(s) {
    var answer = '';
    if (s.length >= 1 && s.length <= 100) {
        // let middleIndex = s.charAt(Math.floor(s.length / 2));
        let middleIndex = Math.floor(s.length / 2);
        if (s.length % 2 === 1) {
            answer = s[middleIndex];    // 인덱스는 0부터 시작하니까!
        } else if (s.length % 2 === 0) {
            answer = s.slice(middleIndex-1, middleIndex+1);
            console.log(answer);
        }
    }
    return answer;
}