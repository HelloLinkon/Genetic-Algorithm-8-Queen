var population = ["46827135", "46827133", "16827135", "26827135"];
var Result = "";
// var population = [];
var fitness = [];
var probability = [];
var max_index1 = 0;
var max_index2 = 0;

// random number generation
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//create cromosomas
function cromosoma(){
	
	var child= "";
	for(var i=0;i < 8; i++)
	{
		var a = randomIntFromInterval(1,8).toString();
		child += a;

	}

	return child;

}

//generate initial population
function generate_population(num_of_population){

	for(var i=0;i<num_of_population;i++)
	{
		var a = cromosoma();
		population.push(a);
	}
	
	
}

//calculate each population fitness
function calculate_fitness(num){

	var one = num;
	// console.log(one);
	var count = 0;
	var total = 0;
	for(var i = 0; i<8; i++)
	{
		var key = one[i];
		count = 0;
		for(var j=i+1; j<8; j++)
		{
			if(one[i] == one[j])
			{
				count++;
			}
		}

		var inc = 1;
		for(var j = i+1; j < 8; j++ )
		{
			
			if(one[j] == inc+Number(key) || one[j] == Number(key)-inc )
			{
				count++;
			}
			inc++;
		}


		total = total + (8 - (count + i + 1));

	}
	
	return total;
}


// set fitness for all
function generate_fitness(){

	for(var i =0; i< population.length; i++)
	{
		var a = calculate_fitness(population[i]);
		fitness[i] = a;
	}
}

//probability
function set_probability(){

	var sum = 0;
	fitness.forEach(function(element){
		sum+=element;
	});


	for(var i =0; i< fitness.length; i++)
	{
		probability[i] = Math.floor((fitness[i]/sum)*100);
	}


}


// selection
function selection(){



	var max = Math.max(...probability);
	
	var len = probability.length;
	for(var i =0 ; i< len; i++)
	{
		if(probability[i] == max)
		{
			max_index1 = i;
		}
	}
	

	for(var i =0 ; i< len; i++)
	{
		if(probability[i] == probability[len-2])
		{
			max_index2 = i;
		}
	}
	


}

//crossover
function crossover(){

	var first_element = population[max_index1];
	var second_element = population[max_index2];
	
	var newGeneration1 = first_element.slice(0,4) + second_element.slice(4,8);
	var newGeneration2 = second_element.slice(0,4) + first_element.slice(4,8);
	population[max_index1] = newGeneration1;
	population[max_index2] = newGeneration2;
	
}



// mutation
function mutation(){

	for(var i =0 ; i<population.length; i++)
	{
		var child = population[i].slice(1,8) + population[i].slice(0,1);
		population[i] = child;
	}
	
}

	generate_fitness();
	set_probability();

	console.log(population);
	console.log(fitness);
	console.log(probability);

	selection();
	crossover();
	mutation();






	




















