var no=5;
var guess=prompt("guess a number");
if(Number(guess)===no)
{
	alert("you got it right");

}
else if(Number(guess) < no)
{
	
	alert("low");

}
else if(Number(guess)>no)
{
alert("high");
}
