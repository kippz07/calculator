var loop = true;

while (loop === true) {

	var choice = '';
	
	var choiceloop = true;

	var option = prompt("Would you like to do (a)ddition, (s)ubtraction, (m)ultiplication or (d)ivision?");

	while (option != 'a' && option != 's' && option != 'm' && option != 'd' && option != '') {
		option = prompt("Would you like to do (a)ddition, (s)ubtraction, (m)ultiplication or (d)ivision?");
	}

	var num1 = prompt("Enter the first value:");

	var num2 = prompt("Enter the second value");

	switch (option) {

		case 's': choice = prompt("The answer is " + (parseInt(num1) - parseInt(num2)) + ". Press enter to make another calculation or enter q to quit.");
		break;

		case 'm': choice = prompt("The answer is " + (parseInt(num1) * parseInt(num2)) + ". Press enter to make another calculation or enter q to quit.");
		break;

		case 'd': choice = prompt("The answer is " + (parseInt(num1) / parseInt(num2)) + ". Press enter to make another calculation or enter q to quit.");
		break;

		case '': ;

		case 'a': choice = prompt("The answer is " + (parseInt(num1) + parseInt(num2)) + ". Press enter to make another calculation or enter q to quit.");
		break;

		//default: choiceloop = false;
	}

	while(choiceloop === true) {

		if (choice === '') {
			choiceloop = false;
			loop = true;
		} else if (choice === 'q') {
			choiceloop = false;
			loop = false;
		} else {
			choiceloop = true;
			choice = prompt("Press enter to make another calculation or enter q to quit.");	
		}
	}

	if (choice === 'q'){
		loop = false;
	}

}