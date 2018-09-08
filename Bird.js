const Bird = function (x,y,context){
  this.context = context;
  this.x = x;
  this.y = y;
  this.velY = 0;
  this.width = 90;
  this.height = 64;


  this.images = [
                 document.getElementById('bird1'),
                 document.getElementById('bird2'),
                 document.getElementById('bird3')
               ]




}


//update method

Bird.prototype.update = function (){
  this.y += this.velY //updated position of the image
  this.velY += 1; // the speed at which the bird will fall
}

// rendering method

Bird.prototype.render = function (){
  var renderX = this.x - this.width/2;
  var renderY = this.y - this.height/2
  this.context.drawImage(this.images[0],renderX,renderY);
}
