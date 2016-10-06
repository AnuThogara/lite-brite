(function() { //iife

    var numberOfRows = 15;
    var numberOfCols = 15; //number of columns in a grid
    var canvas = $('#canvas'); //my placement area thiunk of paper drawing
    // let's make some rows and put them in the body
    makeGrid();

    function changeColor(event){

      $(this).css('background-color','red');
    }
    function makeGrid() {
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
