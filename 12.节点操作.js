let div = document.querySelector('div')
let p = document.querySelector('p')
let input = document.querySelector('input')


// 获取节点名称类型以及值
let nodeName = div.nodeName
let nodeType = div.nodeType
let nodeValue = div.nodeValue

// 获取所有子节点
let allChildren = div.childNodes
// 第一/最后子节点
let firstChild = div.firstChild
let lastChild = div.lastChild
// 获取父节点
let parent = div.parentNode

// 获取前一个兄弟节点
let brother = div.previousSibling
// 后一个兄弟节点
let nextSibling = div.nextSibling

// 获取所有属性节点
let attr = div.attributes

// 创建标签
let newDiv = document.createElement('div')
newDiv.innerHTML='这是一个创建的标签'
newDiv.className = 'myTag'
newDiv.style.backgroundColor='pink'
// 添加子节点到最后
div.appendChild(newDiv)
// 添加到某一节点的前面
p.parentNode.insertBefore(newDiv,p)

// 创建文本节点
let text = document.createTextNode('创建的文本节点')

// 替换节点
p.parentNode.replaceChild(text,p)

// 复制节点，如果不传参则是浅拷贝，只复制最外层，添加true实现深拷贝
let newDiv2 = newDiv.cloneNode(true)
console.log(newDiv2)

// 删除节点
input.parentElement.removeChild(input)

// 获取定位的父元素offsetParent