/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * @todo 迭代实现
 * 在遍历列表时，将当前节点的 next 指针改为指向前一个元素。由于节点没有引用其上一个节点，因此必须事先存储其前一* 个元素。在更改引用之前，还需要另一个指针来存储下一个节点。不要忘记在最后返回新的头引用！
 */
var reverseList = function(head) {
    let currNode = head, rev = null;
    while ( currNode != null) {
        let tmpNode = currNode.next;
        currNode.next = rev;
        rev = currNode;
        currNode = tmpNode
        // console.log(display(rev))
        console.log(display(currNode))
    }
    return rev
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 * @todo 递归实现
 * 递归版本稍微复杂一些，其关键在于反向工作。假设列表的其余部分已经被反转，现在我该如何反转它前面的部分？
 * 假设列表为：
 *     n1→...→nk−1→nk→nk+1→...→nm→∅
 * 若从节点 n_{k+1}nk+1到 n_{m}nm已经被反转，而我们正处于 n_{k}nk。
 *     n1→...→nk−1→nk→nk+1←...←nm
 * 我们希望 n_{k+1}nk+1的下一个节点指向 n_{k}nk。
 * 所以，n_{k}nk.next.next = n_{k}nk。
 * 要小心的是 n_{1}n1的下一个必须指向 Ø 。如果你忽略了这一点，你的链表中可能会产生循环。
 * 如果使用大小为 2 的链表测试代码，则可能会捕获此错误。
 */
var reverseList = function(head) {
    if (head == null || head.next == null) return head;
    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};
let display = function(head) {
    var currNode = head;
    while ( currNode != null && currNode.next != null ){
        console.log( currNode.val );
        currNode = currNode.next;
    }
}
// @lc code=end
