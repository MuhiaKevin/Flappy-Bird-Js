window.onload = function(){

  // canvas details
  const canvas = document.getElementById('screen')
  const context = canvas.getContext('2d')
  canvas.width = innerWidth;
  canvas.height = 512;

  // create an envrioment object
  const enviroment = new Enviroment(canvas,context);
  const bird = new Bird(100,150,context);
  const pipetop = new Pipe(canvas.width,300,document.getElementById('topPipe'),context);
  const pipebottom = new Pipe(canvas.width,100,document.getElementById('bottomPipe'),context);
  gameLoop()

  canvas.fillStyle = "#FFFFFF";

  function gameLoop(){
    context.fillRect(0,0,canvas.width,canvas.height)
    enviroment.update();
    enviroment.render();
    bird.update();
    bird.render();
    pipetop.update();
    pipetop.render();
    pipebottom.update();
    pipebottom.render();

    window.requestAnimationFrame(gameLoop)

  }

}
