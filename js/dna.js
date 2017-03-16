function DNA(gs)
{
	if (gs)
	{ 
		this.gs = gs;
	} else
	{
	this.gs = [];
	
	for (var i = 0; i<genes; i++)
	{
		this.gs[i] = new Vector(Math.random() / 5 - 0.1, Math.random() / 5 - 0.1);
	}

	}

	this.crossover = function(partner)
	{
		var newgenes = [];
		var mid = Math.floor(Math.random()*(genes-1));
		for (var i = 0; i < genes; i++)
		{
			if (i > mid)
			{
				newgenes[i] = this.gs[i];
			}
			else
			{
				newgenes[i] = partner.gs[i];
			}
		
		}
		return new DNA(newgenes);
	}

	this.mutation = function()
	{
		for (var i = 0; i < genes; i++)
		{
			if (Math.random() < 0.01)
			{
				this.gs[i] = new Vector(Math.random() / 5 - 0.1, Math.random() / 5 - 0.1);
			}
		}
	}

}