var canvas = document.getElementById('fondo');
var ctx = canvas.getContext('2d');
var assetManager = new AssetManager();
assetManager.queueDownload("./imagenes/vaca_normal.png","vacanormal");

assetManager.downloadAll(function() {
	var imagen = assetManager.getAsset("vacanormal");
	ctx.drawImage(imagen, 500,225);
    var juego = new Juego(ctx);
    var circulo = new Circulo(juego, 0, 225);
    juego.addEntidad(circulo);
    juego.iniciar();
});

ctx.beginPath();
ctx.fillStyle = "black";
ctx.font = "25pt Arial";
ctx.fillText("Hola Canvas-Mundo", 300, 100);
ctx.closePath(); 
