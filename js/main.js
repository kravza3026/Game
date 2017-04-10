$(function () {

    var info = 0;
    var past = false;
    var go = true;
    $('.slot').click(function () {
        if (go == true) {
            if (past == false && $(this).children().length <= 0) {
                $(this).append(`<div class="dagger"></div>`);
                past = true;
                mas.getGame('.dagger','player1');
                console.log(go);
            }
            else if (past == true && $(this).children().length <= 0) {
                $(this).append(`<div class="zero"></div>`)
                mas.getGame('.zero','player2');
                past = false;
                console.log(go);
            };
        };
    });
})