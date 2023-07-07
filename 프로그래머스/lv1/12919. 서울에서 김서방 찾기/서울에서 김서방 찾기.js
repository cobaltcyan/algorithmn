function solution(seoul) {
    let answer = '';
    
    // if (1 <= seoul.length <= 1000) {
    //     for (let i = 0; i < seoul.length; i++) {
    //         if (1 <= seoul[i].length <= 20) {
    //             if (seoul[i] === "Kim") {
    //                 answer = "김서방은 " + i + "에 있다";   
    //             }   
    //         }
    //     }   
    // }

    let idx = seoul.indexOf('Kim');
    answer = "김서방은 " + idx + "에 있다";

    return answer;
}