function solution(n) {
    var answer = 0;
        
    // 10진법으로 나타냈던 숫자를 3진법으로 바꿔줍니다.
    const transNum = n.toString(3);
    
    // 3진법으로 나타낸 숫자를 뒤집어줍니다.
    const reverseNum = transNum.split('').reverse().join('');
    
    // 현재 3진법으로되어있는 것을 다시 10진법으로 되돌려줍니다.
    answer = parseInt(reverseNum, 3);
    
    return answer;
}