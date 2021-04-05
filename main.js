function drawSymbol(){
    canvas = document.getElementById("myCanvas");
    color="blue";
    ctx=canvas.getContext("2d");
    drawCircle("blue",200,200,ctx);
    drawCircle("black",300,200,ctx);
    drawCircle("red",400,200,ctx);
    drawCircle("#ffdb58",250,250,ctx);
    drawCircle("#48AF48",350,250,ctx);
}

function drawCircle(color, x, y, ctx){
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth=5;    
    ctx.arc(x,y,40,0,2*Math.PI);
    ctx.stroke();
}