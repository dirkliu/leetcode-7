/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  if (n === 1) {
      return ['()']
  }

  var strs = []
  var subs = generateParenthesis(n - 1)
  subs.forEach((item, index) => {
      strs.push('()' + item)
      strs.push('(' + item + ')')
      index && strs.push(item + '()')
  })
  return strs.sort()
}

// ["(((())))","((()()))","(()(()))","(()()())","(()()())","(()())()","()((()))","()(()())","()(())()","()()(())","()()()()","()()()()","()()()()","()()()()"]
// ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]