let buttons = document.getElementsByTagName("button");

for(let button of buttons){
	button.onclick=onButton
}


function onButton(e){
	
   let btn = e.target || e.srcElement
   console.log(btn)
   let action = document.getElementById(btn.id).innerHTML;
   let res = document.getElementById("res")

   switch(action){
   	case "0":
   	case "1":
   	case "+":
   	case "-":
   	case "*":
   	case "/":
   	res.innerHTML+=action;
   	break;
   	case "C":
   	res.innerHTML="";
   	break;
   	case "=":
   	let answer = res.innerHTML
   	let number = /(\d+)/g
   	let Answer = answer.replace(number,function(match){
   		return parseInt(match,2)
   	})

   	res.innerHTML = Math.floor(eval(Answer)).toString(2)
   	break;

   }

   console.log(res)



}