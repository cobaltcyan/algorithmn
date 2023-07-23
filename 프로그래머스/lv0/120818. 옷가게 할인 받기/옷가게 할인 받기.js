function solution(price) {
    let answer = 0;
    if (price >= 500000) {
        answer = price * (1 - 0.20);
    } else if (price >= 300000) {
        answer = price * (1 - 0.10);
    } else if (price >= 100000) {
        answer = price * (1 - 0.05);
    } else {
        answer = price;
    }
    answer = Math.floor(answer);
    console.log(answer);
    return answer;
}