window.onload = function(){

  // canvas details
  const canvas = document.getElementById('screen')
  const context = canvas.getContext('2d')
  canvas.width = innerWidth;
  canvas.height = 512;

  // create an envrioment object
  const enviroment = new Enviroment(canvas,context);
  const bird = new Bird(100,150,context);

  gameLoop()

  canvas.fillStyle = "#FFFFFF";

  function gameLoop(){
    context.fillRect(0,0,canvas.width,canvas.height)
    enviroment.update();
    enviroment.render();
    bird.update();
    bird.render();
    window.requestAnimationFrame(gameLoop)

  }

}
