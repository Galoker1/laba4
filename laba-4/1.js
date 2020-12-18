//1
alert("Hello, World!")
//2
let a= 4
let b=5
alert(a+b)
//3
const c=5
let d= 6
let e=4
alert(c+d+e)
//4
let f=2
let g='Привет'
alert(g/f)
//5
let str1='Привет'
let str2=', м'
let str3='ир!'
alert(str1+str2+str3)
//6
let x = null
alert(x)
//7
let y = false
alert(y + " "+ typeof y)
y=String(y)
alert(y + " "+ typeof y)

let mk="1000"
let nk="10"
alert(mk/nk)
let z="777"
let k=333
alert(k+z)
//8
let ak=2
let bk=4
let ck=2
if (bk*bk-4*ak*ck >0) alert(((-bk+Math.sqrt(bk*bk-4*ak*ck))/2*ak) + '  ' +(( -bk-Math.sqrt(bk*bk-4*ak*ck))/2*ak))
if (bk*bk-4*ak*ck ==0) alert((-bk/2*ak))
else alert("Корней нет")
