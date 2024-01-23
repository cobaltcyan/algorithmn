class Solution {
    fun solution(num_list: IntArray): IntArray {
        // var answer: IntArray = intArrayOf()
        val answer = intArrayOf(0, 0)   // 변수 선언 및 초기화
        // println(num_list.sorted())  //	[1, 2, 3, 4, 5]

        for (num in num_list) {
            if (num % 2 == 0)
                answer[0]++
            else
                answer[1]++
        }
        return answer
    }
}