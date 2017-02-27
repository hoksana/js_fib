
var namb = 1;
var nambe = 1;
var nambr;
var num = prompt("Напишіть будь ласка число");
document.write(namb+"<br>");
document.write(nambe+"<br>");

for(var fib = 3; fib <= num; fib++)
{
    nambr = namb + nambe;
    namb = nambe;
    nambe = nambr;
    
    document.write(nambr+"<br>");
}

