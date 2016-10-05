(function() {//iife

  var numberOfRows = 40;
  var numberOfCols = 40;//number of columns in a grid
  var canvas= $('#canvas');//my placement area thiunk of paper drawing
  // let's make some rows and put them in the body
  for(var rowCount = 0; rowCount < numberOfRows; rowCount +=1 ){
    var row = $('<tr> </tr>');
    for(var colCount=0; colCount< numberOfCols; colCount+=1){
      var column = $('<td> </td>');
    //column inside a row
    column.addClass('cell');
    row.append(column);
  }
    canvas.append(row);
}
}());
