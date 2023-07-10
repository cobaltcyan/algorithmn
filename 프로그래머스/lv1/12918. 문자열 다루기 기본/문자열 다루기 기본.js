function solution(s) {
    let answer = true;
    const regex = /^[0-9]+$/;
    if (s.length === 4 || s.length === 6) {
        if (regex.test(s)) {
            answer = true;
        } else {
            answer = false;
        }    
    } else {
        answer = false;
    }
    console.log(answer);
    return answer;
}
/*
    // 정규표현식
    
    // pattern ^시작 $ 끝 + 정의한 표현식 하나 이상
    
    // const regex = /^[a-zA-Z0-9]$/;
    // regex.test(테스트할문자열);
    
*/

/*
    function solution(s) {
        s = s.split('').map(Number);
        if(s.length === 4 || s.length=== 6){
         if(!s.includes(NaN)){
           return true
           } else{
               return false
           }
        } else {
            return false
        }
    }
*/
