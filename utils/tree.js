var list = [
    'h3',
    'h2','h3',
    'h1','h2','h3','h3','h2','h3',
    'h1','h2','h4','h2','h3'
]

var list2 = ['h3','h2','h12']

const res = []
let stack = [];
const createNode = name => ({name:name, child:[]})
const getParent = name => {
    let index = -1;
    stack.forEach((t,i) => t.name < name ? (index = i) : '')
    return index === -1 ? null : { index, node:stack[index]}
}
list2.forEach((name,i,arr) => {
    const parent = getParent(name)
    const node = createNode(name)
    if (parent) {
        parent.node.child.push(node)
        stack.length = parent.index + 1
        stack.push(node)
    } else {
        res.push(node);
        stack = [node]
    }
})

console.log(JSON.stringify(res,'', 2))