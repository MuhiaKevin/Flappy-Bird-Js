window.onload = function(){

  // canvas details
  const canvas = document.getElementById('screen')
  const context = canvas.getContext('2d')
  canvas.width = 500;
  canvas.height = 512;

  // create an envrioment object
  const enviroment = new Enviroment(canvas,context);
  const bird = new Bird(100,150,context);
  const pipe = new Pipe(context,canvas.width);
  gameLoop()

  canvas.fillStyle = "#FFFFFF";

  function gameLoop(){
    context.fillRect(0,0,canvas.width,canvas.height)
    enviroment.render();
    enviroment.update();
    bird.update();
    bird.render();
    pipe.render();
    pipe.update();
    window.requestAnimationFrame(gameLoop)

  }

}
