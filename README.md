# Genetic-Algorithm-8-Queen
Implement 8 Queen problem with Genetic Algorithm

In computer science and operations research, a genetic algorithm (GA) is a metaheuristic inspired by the process of natural selection that belongs to the larger class of evolutionary algorithms (EA). Genetic algorithms are commonly used to generate high-quality solutions to optimization and search problems by relying on bio-inspired operators such as mutation, crossover and selection.

Try to solve 8 queen problem with genetic algorithm. Used little bit p5.js for presentation. Following step is taken to complete it.

1. Generate population:
Randomly generate initial population for the evalution. 

2. Fitness Function:
Find the fitness of every element of the population. Summation of non attacking queens are consider as fitness of every population.

3. Probability:
from the fitness generate the probability for selection.

4. Crossover:
From the probability select best 2 elements from population and crossover them.

5. Mutation
Though number of population is limited and randomly generated. So, for create more variation this muation will help.

Then continue this step from 2 to 5 again and again to get the result. 
