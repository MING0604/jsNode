let div = document.querySelector('div')
let input = document.querySelector('input')

// focus 聚焦事件
div.addEventListener('focus',()=>{
    console.log('聚焦事件')
},false)

// blur 离焦事件
div.addEventListener('blur',()=>{
    console.log('离焦事件')
},false)

let time;
// click 单击事件
div.addEventListener('click',()=>{
    // console.log('单击事件')
    // 当双击事件和单击事件同时存在于同一个DOM中时，双击时也会触发单击事件，可以用定时器解决
    clearTimeout(time)
    time = setTimeout(() => {
        console.log('单击事件')
    }, 300);
},false)

// dblclick 双击事件
div.addEventListener('dblclick',()=>{
    clearTimeout(time)
    console.log('双击事件')
},false)

// 鼠标事件
// mouseover 移入
// mouseout  移出
// mousedown 按下   
// mouseup   弹起
// mousemove 移动

// keydown 键盘按下
// keyup   弹起