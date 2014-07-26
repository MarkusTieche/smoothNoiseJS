var pointArray = [];
var last;
var noise;
var h;
//PRE DEFINED POINTS
var def = [[30,439],[61,435],[91,483],[122,477],[152,327],[182,442],[213,417],[243,468],[274,364],[304,358],[334,320],[365,444],[395,369],[426,363],[456,474],[486,413],[517,375],[547,376],[578,326],[608,339],[638,498],[669,402],[699,461],[730,484],[760,346],[791,310],[821,395],[851,342],[882,409],[912,431],[943,310],[973,367],[1003,384],[1034,350],[1064,323],[1095,341],[1125,380],[1155,301],[1186,406],[1216,401],[1247,466],[1277,451],[1307,309],[1338,448],[1368,331],[1399,315],[1429,376],[1459,448],[1490,468],[1520,389]];

function init()
{
    initGUI();
    
    noise = new perlinNoise(); //INIT NOISE
    noise.points = def;
    noise.width = window.innerWidth;
    h =  (window.innerHeight/2)-400; //CENTERS THE LINE
    
    var fill = noise.fill(); //FILL WITH NOISE -> RETURNS ARRAY WITH EACH POINTS X AND Y POS
    for (var i = 0; i < fill.length; i++) //ADD A POINT FOR EACH COORDINATE 
    {
        var point = document.createElement('div');
            point.className ="ball";
            point.style.left = fill[i].x+"px";
            point.style.top = fill[i].y+h+"px";
            point.pos = {x:fill[i].x,y:fill[i].y}
            point.dead = false;
        
        document.getElementById("container").appendChild(point);
        
        last = point;
        pointArray.push(point)
    }
    
    changeCurve();
    
}

function changeCurve()
{
    noise.frequency = document.getElementById("frequency").value;
    noise.subDivision = document.getElementById("subDivision").value;
    noise.width = window.innerWidth;
    
    var fill = noise.fill(); //FILL WITH NOISE -> RETURNS ARRAY WITH EACH POINTS X AND Y POS
    
    for (var i = 0; i < fill.length; i++) 
    {
        
        pointArray[i].style.left = fill[i].x+"px";
        pointArray[i].style.top = fill[i].y+h+"px";
        pointArray[i].pos = {x:fill[i].x,y:fill[i].y}
    }
    
    for (var i = fill.length; i < pointArray.length; i++) 
    {
       pointArray[i].style.left = -10+"px";
    }
}

function update()
{
    
}

