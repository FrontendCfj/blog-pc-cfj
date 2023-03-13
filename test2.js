function hasCycle(head) {
  while (head) {
    if (head.flag) {
      return true
    }
    head.flag = true
    head = head.next
  }
  return false
}
module.exports = {
  hasCycle: hasCycle
}
