var shipX =0;
var shipY=0;
var shipZ =0;
vr stars = [];
function startGame
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}
function astr(width, height, image, x, y, z, sizPond) {
	this.image = new Image();
    this.image.src = color;
	this.x = x;
	this.y = y;
	this.z=0;
	this.sizPond = sizPond;
	this.draw = function() {
    ctx = myGameArea.context;
    ctx.drawImage(this.image, 
      (Math.atan2(this.z-shipZ,shipX-(this.x-myGameArea.canvas.width))-33)*600/114, 
      (Math.atan2(this.z-shipZ,shipY-(this.y-myGameArea.canvas.height))-33)*600/114,
      (this.z-shipZ)*this.sizPond, this.z-shipZ)*this.sizPond);
}
	
