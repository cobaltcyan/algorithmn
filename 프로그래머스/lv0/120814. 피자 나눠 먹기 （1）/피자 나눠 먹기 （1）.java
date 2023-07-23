// class Solution {
//     public int solution(int n) {
//         int answer = 0;
//         answer = Math.round(n / 7);
//         return answer;
//     }
// }

class Solution {
    public int solution(int n) {
        int answer = 0;
        answer = (int) Math.ceil((double) n / 7);
        return answer;
    }
}