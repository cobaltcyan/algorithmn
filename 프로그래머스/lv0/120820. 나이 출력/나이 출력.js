function solution(age) {
    var answer = 0;
    const year = 2022;
    
    if (0 <= age <= 120) {
        answer = year - age + 1;
    }
    return answer;
}