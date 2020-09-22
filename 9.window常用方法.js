window.onload = function () {
    let func = () => {
        // open 方法参数： 打开的页面  打开页面的方式  新页面位置属性
        window.open("1.打印.html", "blank", "width=400px,height=400px,left=0,top=500px")
    }
    let clo = () => {
        // close()关闭标签页
        window.close()
    }
    window.onscroll=()=>{
        console.log('发生了滚动')

        // 打印滚动的高度
        let scrollTop = document.documentElement.scrollTop||document.body.scrollTop
        console.log(scrollTop)
    }

    window.onresize=()=>{
        // 窗口变化事件
        let w = document.documentElement.clientWidth
        let h = document.documentElement.clientHeight
        console.log(w,h)
    }
}
