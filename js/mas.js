var mas = (function () {
    var arr = [];
    arr[0] = ['#a1', '#a2', '#a3'];
    arr[1] = ['#b1', '#b2', '#b3'];
    arr[2] = ['#c1', '#c2', '#c3'];
    arr[3] = ['#a1', '#b2', '#c3'];
    arr[4] = ['#c1', '#b2', '#a3'];
    arr[5] = ['#a1', '#b1', '#c1'];
    arr[6] = ['#a2', '#b2', '#c2'];
    arr[7] = ['#a3', '#b3', '#c3'];
       var wins1=0;
    var wins2=0;
   function getGame(name,winner) {
       var dagger;
        for (var i = 0; i <=7; i++) {
            var met = 0;
            for (var q = 0; q <=2;q++) {
                
                if ($(arr[i][q]).children(name,winner).length > 0) {
                    met++;
                };
            };
                    if (met == 3) {
                         alert( winner+' win!');
                        if(winner=='player1'){
                            wins1++;
                        $('.surse1').text(wins1);
                        }else if( winner=='player2'){
                            wins2++;
                            $('.surse2').text(wins2);
                        };
                       $('.dagger').remove();
                         $('.zero').remove();
                    };
        };
    };
    
    return {
        getGame:getGame
    }
})();