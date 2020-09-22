let str = "123";
// 字符串转化为数字
// parseInt 是从第一个字符开始，记录到第一个非数字字符结束   ps：还有一个parseFloat的方法
let num = parseInt(str);

// null和undefined转字符串直接在一个字符串上加null（undefined）即可
console.log('string'+undefined)

// Boolean和Number转字符串则是用toString方法
console.log(typeof(true.toString()))

// Boolean()方法可以将其他类型转化为Boolean类型
console.log(Boolean('123'))