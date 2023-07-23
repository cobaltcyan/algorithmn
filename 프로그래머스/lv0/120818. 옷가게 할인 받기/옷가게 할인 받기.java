class Solution {
    public int solution(int price) {
        int answer = 0;
        if (price >= 500000) {
            answer = (int)(price * (1 - 0.20));
        } else if (price >= 300000) {
            answer = (int)(price * (1 - 0.10));
        } else if (price >= 100000) {
            answer = (int)(price * (1 - 0.05));
        } else {
            answer = (int)(price);
        }
        System.out.println(answer);
        return answer;
    }
}