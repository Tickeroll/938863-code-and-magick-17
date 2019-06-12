window.renderStatistics = function (ctx, names = [], times = []) {
   ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
   ctx.fillRect (110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect (100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = "bold 16px 'PT Mono'";
  ctx.fillText("Ура вы победили!", 115, 40, 100);
  ctx.fillText("Список результатов:", 115, 55, 100);

  var Maxtime = times[0];
  for (var i = 1; i < times.length; i++){
    if (times[i] > Maxtime) {
      Maxtime = times[i];
    }
  }
  var x = 150;
  for (var i = 0; i < names.length; i++){
    if (names[i]==="Вы") {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(125, 125, 255, ' + (Math.random() * 0.8 + 0.2) + ')';
    }
    var h = 150 * (times[i]/Maxtime);
    var columnStart = 95 + (150-h);
    ctx.fillRect(x, columnStart, 40, h);
    ctx.fillStyle = 'black'
    ctx.fillText(names[i], x, 260);
    ctx.fillText(Math.round(times[i]), x, columnStart-10);
    x = x + (50 + 40);
  }
}



