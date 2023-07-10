function solution(s) {
s = s.split('').map(Number);
    if(s.length === 4 || s.length=== 6){
     if(!s.includes(NaN)){
       return true
       } else{
           return false
       }
    }else {
        return false
    }
}


// function solution(s) {
//     let answer = true;
//     // const regex = /^[a-zA-Z0-9]$/;
//     const regex = /^[0-9]%/;
//     console.log(s);
//     console.log(regex.test(s));
//     if (s.length >= 1 && s.length <= 8) {
//         if (regex.test(s) === true) {
//             answer = true;
//         } else {
//             answer = false;
//         }    
//     }
//     console.log(answer);
//     return answer;
// }