var _CARDS = [
          { id : 1, img: "../img/card1.jpg"},
          { id : 2, img: "../img/card2.jpg"},
          { id : 3, img: "../img/card3.jpg"},
          { id : 4, img: "../img/card4.jpg"},
          { id : 5, img: "../img/card5.jpg"},
          { id : 6, img: "../img/card6.jpg"},   
          { id : 7, img: "../img/card7.jpg"},
          { id : 8, img: "../img/card8.jpg"},
          { id : 9, img: "../img/card9.jpg"},
          { id : 10, img: "../img/card10.jpg"},
          { id : 11, img: "../img/card11.jpg"},
          { id : 12, img: "../img/card12.jpg"},
          { id : 13, img: "../img/card13.jpg"},
          { id : 14, img: "../img/card14.jpg"},
          { id : 15, img: "../img/card15.jpg"},
          { id : 16, img: "../img/card16.jpg"},
          { id : 17, img: "../img/card17.jpg"},
          { id : 18, img: "../img/card18.jpg"},
          { id : 19, img: "../img/card19.jpg"},
          { id : 20, img: "../img/card20.jpg"},
          { id : 21, img: "../img/card21.jpg"},
          { id : 22, img: "../img/card22.jpg"},
          { id : 23, img: "../img/card23.jpg"},
          { id : 24, img: "../img/card24.jpg"},
          { id : 25, img: "../img/card25.jpg"},
          { id : 26, img: "../img/card26.jpg"},
          { id : 27, img: "../img/card27.jpg"},
          { id : 28, img: "../img/card28.jpg"}, 
          { id : 29, img: "../img/card29.jpg"},
          { id : 30, img: "../img/card30.jpg"},
          { id : 31, img: "../img/card31.jpg"},
          { id : 32, img: "../img/card32.jpg"} ];

// creates grid, shuffles cards, picks first 8, duplicates them and returns object with 16
function createGrid() {
    var cardlist = _.shuffle(_CARDS);
    var eight = cardlist.slice(0, 8);
    var sixteen = _.concat(eight, _.clone(eight));
    sixteen = _.shuffle(sixteen);
    return sixteen;
}

// plays the game, flips cards on click and checks if cards are matches 
function game() {
    var guess1 = "";
    var guess2 = "";
    var count = 0;
    var pairs = 0;
    $(".pic :button").click(function flipCard() {
    if ((count < 2) &&  ($(this).hasClass("face-up")) === false) {
        count++;
        $(this).removeClass("face-down");
        $(this).addClass("face-up");   
        if (count === 1 ) { 
        guess1 = $(this).attr("card"); 
        }         
        else { 
        guess2 = $(this).attr("card"); 
        if (guess1 === guess2) { 
            $(".pic :button[card=" + guess2 +"]").addClass("match");
            pairs++;
        }   
        else { 
            setTimeout(function() {
            $(".pic :button").not(".match").addClass("face-down");
            $(".pic :button").not(".match").removeClass("face-up");
            }, 1000);
        } 
        count = 0; 
        setTimeout(function() { console.clear(); }, 60000);      
        }
        if (pairs == 8){
            $('#myModal').modal('show');
        }
    }
    });
}

// resets game data returns object with 8 pictures and their matches
function resetGame() {
	var pics = createGrid();
    $(".pic :button").remove();
	guess1 = "";
	guess2 = "";
	count = 0;
    pairs = 0;
    $("#cnt").attr('value', '0.00');
    startTime = moment().format('mm.ss');
    currentTime = moment().format('mm.ss');
	return pics;
}
