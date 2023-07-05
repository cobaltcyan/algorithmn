function solution(n) {
    let answer = [];
    let input = n.toString().split('');
    
    console.log(input);
    
    for (let i = 1; i <= input.length; i++) {
        // console.log(input.length);
        console.log(input.length - i);
        
        answer[i-1] = parseInt(input[input.length - i]);
        // console.log(input[i]);
    }
    
    return answer;
}