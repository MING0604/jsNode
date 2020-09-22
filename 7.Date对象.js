let d = new Date(2019,5,8)
// 这里可以传入一个时间格式的参数或者传入一个时间戳，不传参数返回的是现在的时间
console.log(d)

// toLocaleString 打印全部时间信息
let str = d.toLocaleString()
console.log(str)
// toLocaleTimeString 只打印当天时间信息
str = d.toLocaleTimeString()
console.log(str)
// toLocaleDateString 只打印当前日期信息
str = d.toLocaleDateString()
console.log(str)

// 两个Date对象可以进行减法，获得的是两个时间的时间戳之差
let d2 = new Date(2019,5,9)
console.log(d2-d)