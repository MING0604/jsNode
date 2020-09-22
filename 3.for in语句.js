// for in 中获取的是数组的下标（对象的键名）


let arr = [3,2,3,4]
for (let i in arr){
    console.log(`i=${i}`)
}

let obj = {
    name:'ming',
    age:'19'
}

for(let i in obj){
    console.log(`i=${i},value=${obj[i]}`)
}