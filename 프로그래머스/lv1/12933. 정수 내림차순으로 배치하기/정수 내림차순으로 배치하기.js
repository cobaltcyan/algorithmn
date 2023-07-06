function solution(n) {
    let answer = 0;
    let arr = n.toString().split('');
    let output = '';
    
    arr.sort(function(a, b) {
        return b - a;
    });
        
    for (let i = 0; i < arr.length; i++) {
        output = output + arr[i];            
    }
    answer = parseInt(output);
    
    return answer;
}