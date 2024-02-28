


var btn1=document.querySelector(".paymentone");
btn1.addEventListener("click",()=>{
 document.querySelector("#gift").innerHTML="₹200";
});

var btn2=document.querySelector(".paymenttwo");
btn2.addEventListener("click",()=>{
 document.querySelector("#gift").innerHTML="₹300";
});

var btn3=document.querySelector(".paymentthree");
btn3.addEventListener("click",()=>{
 document.querySelector("#gift").innerHTML="₹400";
});

var btn4=document.querySelector(".paymentfour");
btn4.addEventListener("click",()=>{
 document.querySelector("#gift").innerHTML="₹500";
});

var btn5=document.querySelector(".paymentfive");
btn5.addEventListener("click",()=>{
 document.querySelector("#gift").innerHTML="₹1000";
});

var btn6=document.querySelector(".paymentsix");
btn6.addEventListener("click",()=>{
 document.querySelector("#gift").innerHTML="₹2000";
});


var btn7=document.querySelector(".confirm");
btn7.addEventListener("click",()=>{
alert("PAYMENT SUCCESSFUL");
});