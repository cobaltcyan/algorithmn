import java.util.Arrays;

class Solution {
    public int solution(int[] num_list) {
        int answer = 0;        
        for (int i = 0; i < num_list.length; i++) {
            // System.out.println(num_list[i]);
            if (num_list[i] < 0) {
                answer = i;
                return answer;
            }
        }
        return -1;
    }
}

// 배열 정렬
// System.out.println(Arrays.toString(num_list));
// Arrays.sort(num_list);
// System.out.println(num_list);
// System.out.println(Arrays.toString(num_list));