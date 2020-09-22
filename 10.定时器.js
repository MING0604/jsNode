let i = 0;
// window.setInterval中的window.可以省略
let time = window.setInterval(()=>{
    console.log(i++)
    if(i===3){
        window.clearInterval(time)
    }
},1000)

let time2 = setTimeout(()=>{
    console.log('123')
},3000)