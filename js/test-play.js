var pass = 50;
var score = 90;

var hasPassed = score >= pass;

var el = document.getElementById('answer');
if (hasPassed)
{
	el.innerHTML = 'Level Passed: 1';
}
else
{
	el.innerHTML = 'Level Failed: You Suck';
}

