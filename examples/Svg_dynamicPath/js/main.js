var svg;
var lines = [];
var noise;

function init()
{
    
     noise = new perlinNoise(); //INIT NOISE
    noise.width = window.innerWidth +200;
        
    
     svg = document.getElementById("SVG_scene"); //GET MAIN SVG ELEMENT
    var svgNS = "http://www.w3.org/2000/svg";   //DEFINE THE namespaceURI
    
    for (var j = 0; j < 1; j++) 
    {
        noise.frequency = 3;
        noise.subDivision = 10;
//        noise.highLimit = Math.random()*300;
//        noise.lowLimit = (Math.random()*300)+(100*j);
        var fill = noise.fill(); //FILL WITH NOISE -> RETURNS ARRAY WITH EACH POINTS X AND Y POS
        
        for (var i = 0; i < fill.length-1; i++) 
        {
            var line = document.createElementNS(svgNS,"line"); 
                line.setAttributeNS(null,"x1",fill[i].x);
                line.setAttributeNS(null,"y1",fill[i].y);
                line.setAttributeNS(null,"x2",fill[i+1].x);
                line.setAttributeNS(null,"y2",fill[i+1].y);
                line.setAttributeNS(null,"stroke","#d65b1a");
                line.setAttributeNS(null,"stroke-width","2");
                line.pos = {x:0,y:fill[i+1].y}
                last = line;

             svg.appendChild(line); //ADD CIRCLE TO THE MAIN SVG ELEMENT
            lines.push(line)
        }
    
    }
    
    
    update();
}

function update()
{
    if(lines.length == (noise.subDivision*noise.frequency)-noise.frequency)
    {
        noise.lastPos.x = lines[lines.length-1].getBoundingClientRect().right;
        noise.lastPos.y = last.pos.y;
        var svgNS = "http://www.w3.org/2000/svg";   //DEFINE THE namespaceURI
        var newPos = noise.add();
        for (var i = 0; i < newPos.length-1; i++) 
        {
            var line = document.createElementNS(svgNS,"line"); 
                line.setAttributeNS(null,"x1",newPos[i].x);
                line.setAttributeNS(null,"y1",newPos[i].y);
                line.setAttributeNS(null,"x2",newPos[i+1].x);
                line.setAttributeNS(null,"y2",newPos[i+1].y);
                line.setAttributeNS(null,"stroke","#d65b1a");
                line.setAttributeNS(null,"stroke-width","2");
                 line.pos = {x:0,y:newPos[i+1].y}
                
            last = line;

             svg.appendChild(line); //ADD CIRCLE TO THE MAIN SVG ELEMENT
            lines.push(line)
        }
    }
    
    for (var i = 0; i < lines.length; i++) { 
        
         lines[i].pos.x -= 5;
        
        if(lines[i].getBoundingClientRect().left <= -100)
        {
            svg.removeChild(lines[i]);lines.shift();
        }
        
        lines[i].setAttribute("transform", "translate("+ lines[i].pos.x+" "+0+")");
        
    }
    
    requestAnimationFrame(update);  
}