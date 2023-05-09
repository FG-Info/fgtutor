function fun1()
{
 var parent1 = document.getElementById("randomize1");
 var frag1 = document.createDocumentFragment();
	while(parent1.children.length)
	  {
		frag1.appendChild(parent1.children[Math.floor(Math.random() * parent1.children.length)]);
	  }	
	parent1.appendChild(frag1);
	onload = fun1;
}

var score=0;

function fillq1checker()
{
var f1=document.getElementById("F1");
if(f1.value.toLowerCase() == "troubleshooting" || f1.value.toLowerCase() == "troubleshoot")
{
document.getElementById("fill1marker").innerHTML="&#10004";
score++;
}
else
{
document.getElementById("fill1marker").innerHTML="&#10006";
}
f1.disabled=true;
}

function fillq2checker()
{
var f2=document.getElementById("F2");
if(f2.value.toLowerCase() == "tweezers" || f2.value.toLowerCase() == "tweezer")
{
document.getElementById("fill2marker").innerHTML="&#10004";
score++;
}
else
{
document.getElementById("fill2marker").innerHTML="&#10006";
}
f2.disabled=true;
}

function fillq3checker()
{
var f3=document.getElementById("F3");
if(f3.value.toLowerCase() == "psu" || f3.value.toLowerCase() == "power supply" || f3.value.toLowerCase() == "power supply unit" || f3.value.toLowerCase() == "powersupply" || f3.value.toLowerCase() == "powersupplyunit")
{
document.getElementById("fill3marker").innerHTML="&#10004";
score++;
}
else
{
document.getElementById("fill3marker").innerHTML="&#10006";
}
f3.disabled=true;
}

function fillq4checker()
{
var f4=document.getElementById("F4");
if(f4.value.toLowerCase() == "blackout" || f4.value.toLowerCase() == "black out")
{
document.getElementById("fill4marker").innerHTML="&#10004";
score++;
}
else
{
document.getElementById("fill4marker").innerHTML="&#10006";
}
f4.disabled=true;
}

function fillq5checker()
{
var f5=document.getElementById("F5");
if(f5.value.toLowerCase() == "utility" || f5.value.toLowerCase() == "service" || f5.value.toLowerCase() == "utility programs" || f5.value.toLowerCase() == "service programs")
{
document.getElementById("fill5marker").innerHTML="&#10004";
score++;
}
else
{
document.getElementById("fill5marker").innerHTML="&#10006";
}
f5.disabled=true;
}

function fillq6checker()
{
var f6=document.getElementById("F6");
if(f6.value.toLowerCase() == "post" || f6.value.toLowerCase() == "poweronselftest" || f6.value.toLowerCase() == "power on self test")
{
document.getElementById("fill6marker").innerHTML="&#10004";
score++;
}
else
{
document.getElementById("fill6marker").innerHTML="&#10006";
}
f6.disabled=true;
}

function fillq7checker()
{
var f7=document.getElementById("F7");
if(f7.value.toLowerCase() == "multimedia")
{
document.getElementById("fill7marker").innerHTML="&#10004";
score++;
}
else
{
document.getElementById("fill7marker").innerHTML="&#10006";
}
f7.disabled=true;
}

function fillq8checker()
{
var f8=document.getElementById("F8");
if(f8.value.toLowerCase() == "bitmap" || f8.value.toLowerCase() == "raster")
{
document.getElementById("fill8marker").innerHTML="&#10004";
score++;
}
else
{
document.getElementById("fill8marker").innerHTML="&#10006";
}
f8.disabled=true;
}

function fillq9checker()
{
var f9=document.getElementById("F9");
if(f9.value.toLowerCase() == "portable network graphics" || f9.value.toLowerCase() == "portablenetworkgraphics")
{
document.getElementById("fill9marker").innerHTML="&#10004";
score++;
}
else
{
document.getElementById("fill9marker").innerHTML="&#10006";
}
f9.disabled=true;
}

function fillq10checker()
{
var f10=document.getElementById("F10");
if(f10.value.toLowerCase() == "video editing" || f10.value.toLowerCase() == "videoediting")
{
document.getElementById("fill10marker").innerHTML="&#10004";
score++;
}
else
{
document.getElementById("fill10marker").innerHTML="&#10006";
}
f10.disabled=true;
}





function showScore()
{
document.getElementById("reslab").innerHTML = score + "/10";
}


var seconds = 0
var timer = setInterval(upTimer, 1000);

function upTimer() {
++seconds;
var hour = Math.floor(seconds / 3600);
var minute = Math.floor((seconds - hour * 3600) / 60);
var updSecond = seconds - (hour * 3600 + minute * 60);
document.getElementById("countup").innerHTML = hour + ":" + minute + ":" + updSecond;

if(minute==1)
{
clearInterval(timer);
var f1=document.getElementById("F1");
var f2=document.getElementById("F2");
var f3=document.getElementById("F3");
var f4=document.getElementById("F4");
var f5=document.getElementById("F5");
var f6=document.getElementById("F6");
var f7=document.getElementById("F7");
var f8=document.getElementById("F8");
var f9=document.getElementById("F9");
var f10=document.getElementById("F10");
f1.disabled=true;
f2.disabled=true;
f3.disabled=true;
f4.disabled=true;
f5.disabled=true;
f6.disabled=true;
f7.disabled=true;
f8.disabled=true;
f9.disabled=true;
f10.disabled=true;
}
}