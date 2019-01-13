
// enviroment constructor

const Enviroment = function(canvas,context){
  this.canvas = canvas;
  this.context = context;
  this.bgImg = document.getElementById('bg');
  this.bgPos = 0;
  this.fgPos = 0;
  this.bgSpeed = 1;
}

// method update from class enviroment

Enviroment.prototype.update = function () {
  this.bgPos -= this.bgSpeed; //
  if(this.bgPos < -this.bgImg.width){
      this.bgPos = 0;
  }
};

// draw function
Enviroment.prototype.render = function () {
<<<<<<< HEAD

=======
>>>>>>> 5b5c50854d5253178ac7d29d6e5b3980ee99c5f3
  for (var i = 0; i <= this.canvas.width/this.bgImg.width+1; i++) {
    this.context.drawImage(this.bgImg,this.bgPos+i*this.bgImg.width,0);

  }
};
