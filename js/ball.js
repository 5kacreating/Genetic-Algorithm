function Ball(x,y,r,color, dna)
{
	this.location = new Vector(x,y);
	this.velocity = new Vector(0,0);
	this.acc = new Vector (0,0);

	this.r = r;
	this.color = color;
	this.completed = false;

	if (dna)
	{
		this.dna = dna;
	}
	else
	{
	this.dna = new DNA();
	}

	this.fitness = 0;
	
	this.draw = function() 
	{
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.location.x,this.location.y,this.r,0,2*Math.PI);
		ctx.fill();
	}

	this.update = function()
	{
		var d = this.dist();
		if (d < 10)
		{
			this.completed = true;
			this.location.x = target.location.x;
			this.location.y = target.location.y;
		}

		this.acc.add(this.dna.gs[time]);
		if (!this.completed)
		{	
		this.velocity.add(this.acc);
		this.location.add(this.velocity);

		if(this.location.x + this.r >= cWidth)
		{
			this.velocity.x = this.velocity.x * (-1);
		}

		if(this.location.x - this.r <= 0)
		{
			this.velocity.x = this.velocity.x * (-1);
		}

		if(this.location.y - this.r <= 0)
		{
			this.velocity.y = this.velocity.y * (-1);
		}

		if(this.location.y + this.r >= cHeight)
		{
			this.velocity.y = this.velocity.y * (-1);
		}

		}
		this.acc.mult(0);
	}

	this.addForce = function(v)
	{
		this.acc.add(v);
	}

	this.dist = function()
	{
		return(Math.sqrt((target.location.x - this.location.x)*(target.location.x - this.location.x) + (target.location.y - this.location.y)*(target.location.y - this.location.y)));
	}

	this.countFitness = function()
	{
		var d = this.dist();
		this.fitness = cWidth - d;
		if (this.completed)
		{
			this.fitness *= 10;
		}
	}

	

	





}