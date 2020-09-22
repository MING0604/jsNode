
// ---------------------获取属性节点-----------------------
let input = document.querySelector('input')
// 可以直接通过引用成员的方式获取标签的属性
let name = input.name
console.log(name)
// 通过.getAttrtribute()的方式获取自定义的属性
let attr = input.getAttribute('ming')
console.log(attr)
// 通过setAttribute()来修改自定义属性的值

input.setAttribute("ming",'spcming')
// 通过removeAttribute()来删除自定义属性
window.setTimeout(()=>{input.removeAttribute('ming')},1000)

// ---------------------获取文本节点-----------------------
let div = document.querySelector('div')
let text = div.innerHTML
console.log(text)
// 除了innerHTML之外还有innerText,这个会删掉子标签的标签，只保留文本内容
console.log(div.innerText)


// ---------------------操作css样式-----------------------
// 通过.style.样式名(驼峰命名法)来修改元素的行内样式
div.style.backgroundColor='red'
// 通过window.getComputedStyle(元素节点，伪类).样式属性名来获取样式，是只读属性，不能修改   伪类一般写null即可
console.log(window.getComputedStyle(div,null).backgroundColor)