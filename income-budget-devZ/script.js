
/*this function will calculate the income one should expect based on their tax bracket (determined early on) and the hours worked by the amount they make hourly
will also include extra money out of check based on tax situation
Created by: Zachary Thomas
27 Jun 19*/

function incomeCalc(hours, hourlyRate, extraOut, taxBracket){

	return (hours * hourlyRate) * taxBracket - extraOut;

}

/*general function for checking "closeness" you have to a monetary goal
Created by: Zachary Thomas
27 Jun 19
*/
function moneyGoal(current, target){
	return target - current >= 0;
}

function dateGoal(){

}
//turns out js already implements queues in arrays
//who woulda thought
// function queue()
// {
// 	var data;
// 	var current;
// 	constructor(){
// 		this.data = [];
// 	}

// 	enqueue(item){

// 	}

// 	dequeue(){

// 	}

// 	front(){
// 		return data[0];
// 	}

// 	isEmpty()
// 	{
// 		return 
// 	}

// }