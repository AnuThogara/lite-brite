(function() { //iife


    //load forms polyfill + iVal feature
    //    webshim.polyfill('forms');

    // var numberOfRows = 15;
    // var numberOfCols = 15; //number of columns in a grid
    var canvas = $('#canvas');
    //my placement area thiunk of paper drawing
    // let's make some rows and put them in the body
    var updateGridButton = $('#update-grid-button');
    var numberOfColsInput = $('#number-of-cols');
    var numberOfRowsInput = $('#number-of-rows');
    var selectColor = $('#idColor1');
    var maxVal = 200;
    var colorClass = ['red', 'green', 'blue', 'yellow', 'black'];
    var valclick = 0;

    //numberOfRowsInput.on('change',validateRow);
    makeGrid(15, 15);

    // clearGrid();
    // makeGrid(4,4);
    $('.cell').on('click', changeColor);
    updateGridButton.on('click', updateGridSize);

    function updateGridSize() {
        clearGrid(); //remove the current grid, grab the number columns input to the new grid and grab the no of rows to the new grid
        var newColNumber = parseInt(numberOfColsInput.val());


        var newRowNumber = parseInt(numberOfRowsInput.val());
        //make the new grid based on input cols and rows
        // makeGrid(newRowNumber, newColNumber);
        if (newColNumber <= 30 && newRowNumber <= 30) {
            makeGrid(newRowNumber, newColNumber);
            $('.cell').on('click', changeColor);
        }
        else{
          makeGrid(15, 15);
          $('.cell').on('click', changeColor);
        }

    }

    function clearGrid() {
        canvas.empty();
    }

    function changeColor(event) {
      var currentColor = $(this).css("background-color");
      $(this).css("background-color",selectColor.val());
      if(currentColor==$(this).css("background-color"))
        $(this).css("background-color","white");
//      $(this).toggleClass(selectColor.val());
      //$(this).toggleClass(colorClass[valclick]);
        if (valclick == 4) {
            valclick = 0;
        } else {
            valclick = valclick + 1;
        }
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
    function makeTGrid(numberOfRows, numberOfCols) {
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


    function validateRow() {
        if (!validate(parseInt(numberOfRowsInput.val()), maxVal)) {
            alert("range exceeded");
        }

    }

    function validate(value, maxValue) {
        if (value <= maxValue) {
            makeGrid();
        } else {
            return false;
        }
    }
    //color picker function

        var colpick = $('.demo').each(function() {
            $(this).minicolors({
                control: $(this).attr('data-control') || 'hue',
                inline: $(this).attr('data-inline') === 'true',
                letterCase: 'lowercase',
                opacity: false,
                change: function(hex, opacity) {
                    if (!hex) return;
                    if (opacity) hex += ', ' + opacity;
                    try {
                        console.log(hex);
                    } catch (e) {}
                    $(this).select();
                },
                theme: 'bootstrap'
            });
        });

}());
