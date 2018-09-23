const Pipe = function(context,canvasWidth){
  this.context = context;
  this.canvasWidth = canvasWidth;
  this.velX = 4;
  this.pipeBottom = document.getElementById('bottomPipe');
  this.pipeTop = document.getElementById('topPipe');
  this.pipe = [];
  this.gap = 50;
  this.pipe[0] = {
    x : this.canvasWidth,
    y : 0
  }

}


Pipe.prototype.update = function(){
  this.pipe[0].x -= this.velX;

}


Pipe.prototype.render = function (){
  for (var i = 0; i < this.pipe.length; i++) {
    this.context.drawImage(this.pipeTop,this.pipe[i].x,this.pipe[i].y-300);
    this.context.drawImage(this.pipeBottom,this.pipe[i].x,this.pipe[i].y+400);
    // console.log(this.pipe[i].x)

  }
}
