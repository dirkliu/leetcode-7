function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var head = new ListNode(1)
var cur = head
for (i = 2; i < 6; i++ ) {
  cur.next = new ListNode(i)
  cur = cur.next
}

console.log('head:', head)

var oddEvenList = function(head) {
  var oddCur = head
  var evenCur = head.next
  var evenHead = head.next
  while (evenCur) {
      if (evenCur.next) {
         oddCur.next = evenCur.next 
         oddCur = oddCur.next
         evenCur.next = oddCur.next
         evenCur = evenCur.next
      } else {
         evenCur = null
      }
  }
  oddCur.next = evenHead
  return head
 };

var newHead = oddEvenList(head)

console.log('newHead:', newHead)
