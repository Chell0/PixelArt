// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var height, width, color;

$("#sizePicker").submit(function (event){
    event.preventDefault();
    height = $("#inputHeight").val();
    width = $("#inputWeight").val();
    makeGrid(height, width);
    console.log("Height:" +length+ " and breadth: " + breadth);
});

function makeGrid(n,m) {
    $("tr").remove();

    for (let i = 1; i <= n; i++) {
        $("#pixelCanvas").append("<tr id=table" + i + "></tr>");
        for (let j = 1; j <= m; j++) {
            $("#table" + i).append(("<td></td>"));            
        }        
    }
    // add color to cell
    $("td").click(function addColor(){
        color = $("#colorPicker").val();

        if ($(this).attr("style")) {
            $(this).removeAttr("style");
        } else {
            $(this).attr("style", "background-color:" + color);
        }
    })
}

