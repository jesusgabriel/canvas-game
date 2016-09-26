var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var gb = document.getElementById('lol');
var player = {
  x:50,
  y:50,
  width: 80,
  height: 80,
  imagen:document.getElementById('loco'),
  update: function(){


  },
  render: function(){

    ctx.drawImage(player.imagen, player.x, player. y, player.width, player.height)
  }
};

function gameLoop(){
  ctx.fillStyle = 'white';
  ctx.drawImage( gb, 0, 0, canvas.width, canvas.height);
player.update();
player.render();
window.requestAnimationFrame(gameLoop);
}

gameLoop();
