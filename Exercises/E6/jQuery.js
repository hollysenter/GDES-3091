console.log("Hello.");

for (let step = 0; step < 100; step++) {
    let blocks = '<div class="block" style="width:100vw; height: 10px;border: 2px solid black;">';
    $("body").append(blocks);
}

console.log($(".block"));

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(255));

//mouseenter event
$(".block").each(function () {
    $(this).on("mouseenter", function () {
        //.css manipulation
        $(this).css("background-color", "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")");
    })
    //click event
    $(this).on("click", function () {
        //addClas manipulation
        $(this).addClass("no-width");

    })
})
//keypress event
$(document).on("keypress", function () {
    console.log("a key was pressed");
    $(".block").removeClass("no-width");
})

$(document).ready(function () {
    $("#fadeButton").click(function () {
        // fadeOut effect with a duration of 1000 milliseconds (1 second)
        $("#textToFade").fadeOut(1000);
    });
});

// Manipulation = .css, addClass
// Event = click, keypress, mouseenter
// Effect = fade