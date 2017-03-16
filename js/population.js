function Population(numb)
{
	this.rockets = [];
	this.popsize = numb;
	this.matingpool = [];

	for (var  i = 0; i<this.popsize; i++)
	{
		var r = parseInt(Math.random() * 255);
		var g = parseInt(Math.random() * 255);
		var b = parseInt(Math.random() * 255);


		this.rockets[i] = new Ball(cWidth/2, cHeight - 5, 5, "rgb("+r+","+g+","+b+")");
	}

	this.update = function()
	{
		for (var i = 0; i<this.popsize; i++)
		{	
			this.rockets[i].update();
			this.rockets[i].draw();
		}
	}

	this.evaluate = function()
	{
		var maxfit = 0;
		for (var  i = 0; i<this.popsize; i++)
		{
			this.rockets[i].countFitness();
			if(this.rockets[i].fitness > maxfit )
			{
				maxfit = this.rockets[i].fitness;
			}
		}

		for (var  i = 0; i<this.popsize; i++)
		{
			this.rockets[i].fitness /= maxfit; 
		}

		this.matingpool = [];

		for (var  i = 0; i<this.popsize; i++)
		{
			var n = this.rockets[i].fitness * 100;
				for (var  j = 0; j<n; j++)
				{
					this.matingpool.push(this.rockets[i]);
				}
		}

	}

	this.selection = function()
	{
		var newRockets = [];

		for (var i = 0; i < this.rockets.length; i++)
		{
		var index = Math.floor(Math.random() * (this.matingpool.length-1));
		var parentA = this.matingpool[index].dna;
	
		var index2 = Math.floor(Math.random() * (this.matingpool.length-1));
		var parentB = this.matingpool[index2].dna;

		var child = parentA.crossover(parentB);
		child.mutation();

			var r = parseInt(Math.random() * 255);
		var g = parseInt(Math.random() * 255);
		var b = parseInt(Math.random() * 255);

		newRockets[i] = new Ball(cWidth/2, cHeight - 5, 5, "rgb("+r+","+g+","+b+")", child);
		}
		this.rockets = newRockets; 
	}

}