class Solution {
    public String longestCommonPrefix(String[] strs) {
      String str = "";
      int i = 0;
      int n = strs.length
      if (n == 0) {
        return str
      }
      for (int i = 0; i < strs[0].length(); i++) {
        for (int j = 1; j < n; j++) {
          if i >= strs[j].length() || strs[0][i].toString() != strs[j][i].toString() {
            return str
          }          
        }
        str += string(strs[0][i])
      }
      return str 
    }
}