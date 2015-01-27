var question1 = function (){

	var pass =5;
	var score = 2;

	var hasPassed = score >= pass;

	var el = document.getElementById('answer');
	if (hasPassed)
	{
		el.innerHTML = 'Level Passed: 1';
	}
	else
	{
		el.innerHTML = 'Level Failed: Try Again';
	}

};

document.querySelector('.button').addEventListener('click', question1);

