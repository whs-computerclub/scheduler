$(document).ready(function () {
  var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  var data = JSON.parse(blocks);
  //var data = blocks;
  var i;
  var date = new Date();
  var render;
  if (date.getDay() === 1) {
    render = data.articulation;
    for (i = 0; i < render.length; i++) {
      if (!render[i].bold) {
        $('#display').append('<tr><td>' + render[i].name + ':</td><td>' + render[i].start + '-' + render[i].end + '</td></tr>');
      } else if (render[i].bold) {
        $('#display').append('<tr><td><strong>' + render[i].name + ':</strong></td><td><strong>' + render[i].start + '-' + render[i].end + '</strong></td></tr>');
      }
    }
  } else if (date.getDay() === 2 || date.getDate() === 3 || date.getDate() === 4 || date.getDate() === 5) {
    render = data.regular;
    for (i = 0; i < render.length; i++) {
      if (!render[i].bold) {
        $('#display').append('<tr><td>' + render[i].name + ':</td><td>' + render[i].start + '-' + render[i].end + '</td></tr>');
      } else if (render[i].bold) {
        $('#display').append('<tr><td><strong>' + render[i].name + ':</strong></td><td><strong>' + render[i].start + '-' + render[i].end + '</strong></td></tr>');
      }
    }
  }
});
