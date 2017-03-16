function Vector(a,b)
{
	this.x = a;
	this.y = b;

	this.length = function()
	{
		return (Math.sqrt(this.x * this.x + this.y * this.y));
	}

	this.normal = function()
	{
		var l = this.length();		

		this.x = this.x / l;
		this.y = this.y / l;
	}

	this.add = function(vector)
	{
		this.x = this.x + vector.x;	
		this.y = this.y + vector.y;
	}

	this.mult = function(a)
	{
		this.x = this.x * a;
		this.y = this.y * a;
	}

}