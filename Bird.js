const Bird = function (x,y,context){
  this.context = context;
  this.x = x;
  this.y = y;
  this.velY = 0;
  this.width = 90;
  this.height = 64;
  this.ticks = 0; // this part is for animating the bird so that it looks like its flying
  this.imagesIndex = 0; // this is the image counter
  var self = this;

  // images or sprites that will be used to animate the bird flying

  this.images = [
                 document.getElementById('bird1'),
                 document.getElementById('bird2'),
                 document.getElementById('bird3')
               ]

// keyboard event for pushing the bird up
// keyboard key 'space' keyCode is 32


document.addEventListener('keydown',function(e){
    // console.log(e)

    // When keyboard key 'space' is pressed then subtract the velocity by 16

    if(e.keyCode === 32){
      self.velY = -14
    }


});



}


/*
  In this method the y (this.velY) cordinates of the bird will keep increasing (this.velY += 1) which means it is dropping
  When the keyboard button is pressed, then the Y cordinate at the time is subtracted by 16 thus making it jump up

*/


//update method

Bird.prototype.update = function (){
  this.ticks++
  if(this.ticks % 15 === 0){

    /*
      1. In the first tick which is 15   (15 % 15 === 0)
          this.imagesIndex = 0 and so  (this.imagesIndex+1)% this.images.length = 1

      2. In the first tick which is 30   (30 % 15 === 0)
              this.imagesIndex = 1 and so  (this.imagesIndex+1)% this.images.length = 2

      3. In the first tick which is 45   (45 % 15 === 0)
              this.imagesIndex = 2 and so  (this.imagesIndex+1)% this.images.length = 0


      This loop will continue until  it animates a bird flying.

    */

    this.imagesIndex = (this.imagesIndex+1) % this.images.length
  }

  this.y += this.velY     //updated position of the image
  this.velY += 1    // the speed at which the bird will fall
  //console.log(this.ticks)

}

// rendering method

Bird.prototype.render = function (){

  // this is just to make sure that the bird doesnt appear further down or foward
  var renderX = this.x - this.width/2;
  var renderY = this.y - this.height/2

  this.context.drawImage(this.images[this.imagesIndex],renderX,renderY);



}
