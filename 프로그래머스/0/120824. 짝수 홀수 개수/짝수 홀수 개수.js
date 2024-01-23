function solution(num_list) {
    let answer = [];
    let num1 = 0
    let num2 = 0;
    for (let i = 0; i < num_list.length; i++) {
        // console.log(num_list[i]);   // 1, 2, 3, 4, 5 
        if (num_list[i] % 2 == 0)
            num1++;
        else
            num2++;
    }
    answer.push(num1, num2);
    return answer;
}

// for...of 배열순회 방식 
// function solution(num_list) {
//     var answer = [0,0];
//     for(let a of num_list){
//         answer[a%2] += 1
//     }
//     return answer;
// }
