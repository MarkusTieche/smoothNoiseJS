//SmoothNoise script
//ver: 0.1
//markusT inkfood.com
//


var smoothNoise = function ()
{
    this.frequency = 50;
    this.subDivision = 25;
    this.highLimit = 300;
    this.lowLimit = 500;
    this.lastPos = {x:0,y:0};
    this.points = [];
    this.width = window.innerWidth;
}

smoothNoise.prototype.fill = function()
{
    var points = [];
    
    this.lastPos = {x:this.lastPos.x,y:randomNumber(this.lowLimit,this.highLimit)};
    
    //PRE DEFINED POINTS
    if(this.points.length > 0)
    {
        this.lastPos = {x:0,y:this.points[0][1]}
        for (var i = 0; i < this.frequency; i++) 
        {
            var subPoints = this.add(null,this.points[i][1]);
            
            for (var j = 0; j < subPoints.length; j++) 
            {
                    points.push(subPoints[j])
            }
        }
    }
    //DYNAMIC POINTS
    else
    {
    
        for (var i = 0; i < this.frequency; i++) 
        {
            var subPoints = this.add();

            for (var j = 0; j < subPoints.length; j++) 
            {
                points.push(subPoints[j])
            }
        }
        
    }
    
    return points;
}

smoothNoise.prototype.add = function(nextX,nextY)
{
    if(nextX){var x = nextX}//PRE DEFINED POINTS
    else {var x = (this.lastPos.x + (this.width/(this.frequency)));}//DYNAMIC POINTS
    
    if(nextY){var y = nextY}//PRE DEFINED POINTS
    else {var y = randomNumber(this.lowLimit,this.highLimit);}//DYNAMIC POINTS
    
    
    var subPoints = [];
    
    for (var i = 0; i < this.subDivision; i++) 
    {
        var t = i/this.subDivision;
        
        var sub_x = (((x-this.lastPos.x)/this.subDivision)*(i))+this.lastPos.x;
        
        var sub_y = Cosine_Interpolate(this.lastPos.y, y, t);
        
        subPoints.push({x:sub_x,y:sub_y})
    }
    
    this.lastPos = {x:x,y:y};
    
    return subPoints;
}

function randomNumber(min,max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Linear_Interpolate(a, b, x)
{
	return  a*(1-x) + b*x;
}

function Cosine_Interpolate(a, b, x)
{
	var ft = x * 3.1415927 //MATH PI
	var f = (1 - Math.cos(ft)) * .5

	return  a*(1-f) + b*f
}