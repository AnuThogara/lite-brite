(function() { //iife

    // var numberOfRows = 15;
    // var numberOfCols = 15; //number of columns in a grid
    var canvas = $('#canvas'); //my placement area thiunk of paper drawing
    // let's make some rows and put them in the body
    makeGrid(15,15);
    clearGrid();
    makeGrid(30,30);
    $('.cell').on('click', changeColor);

    function clearGrid(){
      canvas.empty();
    }

    function changeColor(event){
      $(this).toggleClass('red');
    }

    function makeGrid(numberOfRows, numberOfCols) {
        for (var rowCount = 0; rowCount < numberOfRows; rowCount += 1) {
            var row = $('<tr> </tr>');
            for (var colCount = 0; colCount < numberOfCols; colCount += 1) {
                var column = $('<td> </td>');
                //column inside a row
                column.addClass('cell');
                row.append(column);
            }
            canvas.append(row);
        }
    }

}());
