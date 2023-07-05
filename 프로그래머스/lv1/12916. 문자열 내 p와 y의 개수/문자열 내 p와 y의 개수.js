function solution(s){
    let answer = true;    
    let psum = 0;
    let ysum = 0;    
    let arr = s.split('');
    let check_eng = /[a-zA-Z]/; //영어
    
    if (check_eng.test(s) && arr.length <= 50) {

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] == 'p' || arr[i] == 'P')
                psum = psum + 1;

            if (arr[i] == 'y' || arr[i] == 'Y')
                ysum = ysum + 1;
        }

        if (psum === ysum)
            answer = true;
        else
            answer = false;
    }
    
    return answer;
}