console.log("Hello");

// for (let step = 0; step < 1000; step++) {
//     let blocks = '<div class"block" style="width:100vw; height: 10px; border:2px solid black;">';
//     $("body").append(blocks);
// }

for (let step = 0; step < 360; step++) {
    let blocks = `<div class"block" style="width:100vw; height: 100vh; background-color: hsl(${step}, 50%, 50%)">`;
    $("body").append(blocks);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(255));

$(".block").each(function () {
    $(this).on("mouseenter", function () {
        $(this).css("background-color", "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")");
    });

    $(this).on("click", function () {
        $(this).addClass("no-width");
    })
})


$(document).on("keypress", function () {
    console.log("a key was pressed");
    $(".block").removeClass("no-width");
})

