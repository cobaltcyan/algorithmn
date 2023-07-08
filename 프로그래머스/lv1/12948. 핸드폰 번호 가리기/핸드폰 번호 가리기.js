function solution(phone_number) {
    let answer = '';
    let arr = phone_number.toString().split('');
    let number = '';
    let output = '';
    
    if (phone_number.length >= 4 && phone_number.length <= 20) {
        
        for (let i = 0; i < arr.length - 4; i++) {
            output = output + '*';
        }
    }
    
    answer = output + phone_number.slice(-4);
    
    return answer;

    // 참고 숫자 -> '*' 로 바꾸기
    // phone_number.replace(/\d/g, "*");
}