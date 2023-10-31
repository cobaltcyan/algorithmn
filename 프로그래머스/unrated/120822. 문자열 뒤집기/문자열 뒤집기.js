function solution(my_string) {
    var answer = '';
    var i, j;
    let arr = [];
    let output = [];
    for (i = 0; i < my_string.length; i++) {
        arr.push(my_string.split('')[i]);
    }
    console.log(arr);
    
    for (j = arr.length - 1; j >= 0; j--) {
        output.push(arr[j]);
    }
    console.log(output);
    
    answer = output.join('');
    return answer;
    
    // return my_string.split('').reverse().join('');
}