public class Solution {
    public int solution(int n) {
        int answer = 0;
        while (n > 0) {
            answer += n % 10;  // n의 마지막 자릿수를 answer에 더함
            n /= 10;  // n을 10으로 나누어 마지막 자릿수를 제거
        }
        return answer;
    }
}

// class Solution {
//     public int solution(int n) {
//         int answer = 0;
//         String str = Integer.toString(n);
//         String[] arr = str.split("");

//         for(int i = 0; i < arr.length; i++) {
//             answer += Integer.parseInt(arr[i]);
//         }
//         return answer;
//     }
// }
