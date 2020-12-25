
//9
console.log('9)');
let x0= prompt( 'x0=');
let xk = prompt('xk=');
for (let i = x0;i<=xk;i++){console.log('x='+ String(i) + '   y=' + String(i*i*i+i*i-3*i))}

//10
console.log('10)');
let a=[];
let s=0;
for (let k =0;k<5;k++){
  a[k]=Math.random() * (10 - 1) + 1;
  s+=Math.pow(a[k],2);
}
  console.log('['+a+']' + '   '  + s);
//11
console.log('11)');
let x10= prompt( 'x10=');
console.log(parseInt(x10).toString(2));
//12
console.log('12)');
let b = ['aaa', 'bab', 'aba'];
let bstring = b.toString();
let sa=0;
for(i = 0; i < bstring.length; i++) {
  if (bstring[i]=='a'){
  	sa++;
  }
}
console.log(sa);
//13
console.log("13)");
let str = 'Иванов Иван, Петров Пётр, Ульянова Ульяна';

let names = str.split(',');
console.log(names);
//14
console.log("14)");
function funkcia(stroka) {
	console.log(stroka);
}
funkcia('Hello, World!');
//15
console.log("15)");
let z = "Hello";
function change() {
	let z = "Ugu";
	alert(z);
}
change();
alert(z);
//16
console.log("16)");
function summ(x1,x2) {
	return(x1+x2);
}
console.log(summ(1,2));

