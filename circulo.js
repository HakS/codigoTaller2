function Circulo(juego, x, y ) {
	this.juego = juego;
	this.x = x;
	this.y = y;
	this.fps = 0;
	this.ret = 20;
	this.start = 400;
	this.remover = false;
}
Circulo.prototype.actualizar = function() { 
    this.fps ++;
    this.x = this.start;
    if (this.y <= (this.start)) {
		var calc = this.start + (-this.ret)*(this.fps) + 0.5*(1.001)*Math.pow(this.fps,2);
        if (calc >this.start+1)calc = this.start;        
        this.y = calc;
    }
    else {
        this.y = this.start;
        this.fps=0;
        this.ret = this.ret - 5;
    }
};

Circulo.prototype.dibujar = function(ctx) { 
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "black";
    ctx.arc(this.x, this.y, 50, 0, Math.PI*2, false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}; 
