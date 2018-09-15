const Pipe = function(x, y,image, context){
  this.x = x;
  this.y = y;
  this.context = context;
  this.image = image;
  this.velX = 4;
  this.sprites = [document.getElementById('bottomPipe'),document.getElementById('topPipe')]
}




Pipe.prototype.update = function(){
  this.x -= this.velX;

      // Check if the pipe is out of the screen
      if (this.x  <= 0) {
          this.x = document.getElementById('screen').width; // Make it jump to the right side of the screen

          // If the pipe is the top one
          if (this.y <= 320) {
              this.y = -(Math.random() * (150 - 50) + 50); // Math.random() * (max - min) + min
              // If the pipe is the bottom one
          } else {
              this.y = 320 + (Math.random() * (150 - 50) + 50);
          }
      }
}


Pipe.prototype.render = function (){

  this.context.drawImage(this.image,this.x,this.y);

}
