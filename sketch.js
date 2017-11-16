function setup() {
  createCanvas(200, 800);
  // generate_population(10);
  
}
var y = 16;


function draw() {

	generate_fitness();
	set_probability();

	console.log(population);
	console.log(fitness);
	console.log(probability);
	
	for(var i =0; i<fitness.length; i++)
	{
		if(fitness[i] == 28)
		{
			
			// console.log("Result" + population[i]);
			
			Result = population[i];
			textSize(20);
			text(Result, 10, y);
			y = y+20;	
		}
	}

	
	


	selection();
	crossover();
	mutation();
 	
}