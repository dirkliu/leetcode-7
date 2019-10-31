/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }

  var sMap = {}
  var tMap = {}
  for (i = 0; i < s.length; i++) {
    sMap[s[i]] ? sMap[s[i]]++ : (sMap[s[i]] = 1)
    tMap[t[i]] ? tMap[t[i]]++ : (tMap[ts[i]] = 1)
  }

  for (i in sMap) {
    if (sMap[i] !== tMap[i]) {
      return false
    } else {
      delete tMap[i]
    }
  }

  for (i in tMap) {
    if (sMap[i] !== tMap[i]) {
      return false
    }
  }
  return true
};