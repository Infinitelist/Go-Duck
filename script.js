/* Rutherford Labbe - 12/28/2023 */

/* ----------------------- NOTES -------------------------- */

// document.addEventListener('DOMContentLoaded', function (){});
// window.onload = function(){};
// Generate a random integer between 1 and 2 (inclusive)
// const randomInteger = Math.floor(Math.random() * 2) + 1;

// Set a timeout to hide the element after a certain duration (e.g., 3 seconds)
/*setTimeout(function () {
    // Hide the element
    messageElement.style.display = 'none';
  }, 3000);
*/

/*
    function numberToMorse(number) {
        const digits = number.toString().split('');
        const morseCodeArray = digits.map(digit => morseCodeMap[digit]);
        return morseCodeArray.join(' ');
    }
*/

/* ----------------------- NOTES -------------------------- */

// Global Variable - Video Card
var startPage = document.getElementById('title_video');

// Global Variable - Intro Audio
var introAudio = document.getElementById('intro_audio');

// Global Variable - Body Tag
var bodyTag = document.body;

// Global Variable - Content Box
var contentBoxes =  document.getElementById('content');

// Waits for the window to load before playing the video
window.onload = function() {
    startPage.play();
};

// Click on the starting page for it to disappear and the intro sound to play
startPage.addEventListener('click', function(){
    startPage.style.display = 'none';
    introAudio.play();

    // Body color changes and content box appears
    bodyTag.style.backgroundColor = 'var(--FruitSalad)';
    contentBoxes.style.display = 'block';
});

/* ----------------------------------------------------- Section Divider ----------------------------------------------------- */

// Global Variable - Duck Quack Audio
var duckQuack = document.getElementById('duck_audio');

// Global Variable - 1 to 10 boxes
var box_1 = document.getElementById('box_1');
var img_Duck_1 = document.getElementById('img_duck_1');

var box_2 = document.getElementById('box_2');
var img_Duck_2 = document.getElementById('img_duck_2');

var box_3 = document.getElementById('box_3');
var img_Duck_3 = document.getElementById('img_duck_3');

var box_4 = document.getElementById('box_4');
var img_Duck_4 = document.getElementById('img_duck_4');

var box_5 = document.getElementById('box_5');
var img_Duck_5 = document.getElementById('img_duck_5');

var box_6 = document.getElementById('box_6');
var img_Duck_6 = document.getElementById('img_duck_6');

var box_7 = document.getElementById('box_7');
var img_Duck_7 = document.getElementById('img_duck_7');

var box_8 = document.getElementById('box_8');
var img_Duck_8 = document.getElementById('img_duck_8');

var box_9 = document.getElementById('box_9');
var img_Duck_9 = document.getElementById('img_duck_9');

var box_10 = document.getElementById('box_10');
var img_Duck_10 = document.getElementById('img_duck_10');

// Global Variable - 11 to 20 boxes
var box_11 = document.getElementById('box_11');
var img_Duck_11 = document.getElementById('img_duck_11');

var box_12 = document.getElementById('box_12');
var img_Duck_12 = document.getElementById('img_duck_12');

var box_13 = document.getElementById('box_13');
var img_Duck_13 = document.getElementById('img_duck_13');

var box_14 = document.getElementById('box_14');
var img_Duck_14 = document.getElementById('img_duck_14');

var box_15 = document.getElementById('box_15');
var img_Duck_15 = document.getElementById('img_duck_15');

var box_16 = document.getElementById('box_16');
var img_Duck_16 = document.getElementById('img_duck_16');

var box_17 = document.getElementById('box_17');
var img_Duck_17 = document.getElementById('img_duck_17');

var box_18 = document.getElementById('box_18');
var img_Duck_18 = document.getElementById('img_duck_18');

var box_19 = document.getElementById('box_19');
var img_Duck_19 = document.getElementById('img_duck_19');

var box_20 = document.getElementById('box_20');
var img_Duck_20 = document.getElementById('img_duck_20');

// Global Variable - 21 to 30 boxes
var box_21 = document.getElementById('box_21');
var img_Duck_21 = document.getElementById('img_duck_21');

var box_22 = document.getElementById('box_22');
var img_Duck_22 = document.getElementById('img_duck_22');

var box_23 = document.getElementById('box_23');
var img_Duck_23 = document.getElementById('img_duck_23');

var box_24 = document.getElementById('box_24');
var img_Duck_24 = document.getElementById('img_duck_24');

var box_25 = document.getElementById('box_25');
var img_Duck_25 = document.getElementById('img_duck_25');

var box_26 = document.getElementById('box_26');
var img_Duck_26 = document.getElementById('img_duck_26');

var box_27 = document.getElementById('box_27');
var img_Duck_27 = document.getElementById('img_duck_27');

var box_28 = document.getElementById('box_28');
var img_Duck_28 = document.getElementById('img_duck_28');

var box_29 = document.getElementById('box_29');
var img_Duck_29 = document.getElementById('img_duck_29');

var box_30 = document.getElementById('box_30');
var img_Duck_30 = document.getElementById('img_duck_30');

// Global Variable - 31 to 40 boxes
var box_31 = document.getElementById('box_31');
var img_Duck_31 = document.getElementById('img_duck_31');

var box_32 = document.getElementById('box_32');
var img_Duck_32 = document.getElementById('img_duck_32');

var box_33 = document.getElementById('box_33');
var img_Duck_33 = document.getElementById('img_duck_33');

var box_34 = document.getElementById('box_34');
var img_Duck_34 = document.getElementById('img_duck_34');

var box_35 = document.getElementById('box_35');
var img_Duck_35 = document.getElementById('img_duck_35');

var box_36 = document.getElementById('box_36');
var img_Duck_36 = document.getElementById('img_duck_36');

var box_37 = document.getElementById('box_37');
var img_Duck_37 = document.getElementById('img_duck_37');

var box_38 = document.getElementById('box_38');
var img_Duck_38 = document.getElementById('img_duck_38');

var box_39 = document.getElementById('box_39');
var img_Duck_39 = document.getElementById('img_duck_39');

var box_40 = document.getElementById('box_40');
var img_Duck_40 = document.getElementById('img_duck_40');

// Global Variable - 41 to 50 boxes
var box_41 = document.getElementById('box_41');
var img_Duck_41 = document.getElementById('img_duck_41');

var box_42 = document.getElementById('box_42');
var img_Duck_42 = document.getElementById('img_duck_42');

var box_43 = document.getElementById('box_43');
var img_Duck_43 = document.getElementById('img_duck_43');

var box_44 = document.getElementById('box_44');
var img_Duck_44 = document.getElementById('img_duck_44');

var box_45 = document.getElementById('box_45');
var img_Duck_45 = document.getElementById('img_duck_45');

var box_46 = document.getElementById('box_46');
var img_Duck_46 = document.getElementById('img_duck_46');

var box_47 = document.getElementById('box_47');
var img_Duck_47 = document.getElementById('img_duck_47');

var box_48 = document.getElementById('box_48');
var img_Duck_48 = document.getElementById('img_duck_48');

var box_49 = document.getElementById('box_49');
var img_Duck_49 = document.getElementById('img_duck_49');

var box_50 = document.getElementById('box_50');
var img_Duck_50 = document.getElementById('img_duck_50');


/* ----------------------------------------------------- Section Divider ----------------------------------------------------- */

// Global Variable - Random Number Generator - (1 to 50)
const randomNumber = Math.floor(Math.random() * 50) + 1;

// Number to morse code
const morseCodeMap = {
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.'
};

// Pass number to morse code function
const morseCode = numberToMorse(randomNumber);

// Converts number to morse code
function numberToMorse(number) {
    const digits = number.toString().split('');
    const morseCodeArray = digits.map(digit => morseCodeMap[digit]);
    return morseCodeArray.join(' ');
}

// Prints morse code to console
console.log('Morse Code:', morseCode);

/* ----------------------------------------------------- Section Divider ----------------------------------------------------- */

// Global Variable - Laugh Track
var laughTrack = document.getElementById('laugh_audio');

// Global Variable - Outro Track
var outroTrack = document.getElementById('outro_audio')

// Global Variable - Laugh Card
var tryAgain = document.getElementById('try_again');

// Global Variable - Winner Card
var winnerCard = document.getElementById('winner_video');

// Click on the winner card for the game to restart
winnerCard.addEventListener('click', function(){
    // Reload the window
    location.reload();
});

/* ----------------------------------------------------- Section Divider ----------------------------------------------------- */

switch(randomNumber) {

    /* ----------------------- (1 - 10) ------------------------- */
    case 1:
        // Click the box to hear the duck quack sound
        box_1.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 1){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_1.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_1.style.display = 'block';
        });
        break;
    case 2:
        // Click the box to hear the duck quack sound
        box_2.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 2){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_2.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_2.style.display = 'block';
        });
        break;
    case 3:
        // Click the box to hear the duck quack sound
        box_3.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 3){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_3.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_3.style.display = 'block';
        });
        break;
    case 4:
        // Click the box to hear the duck quack sound
        box_4.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 4){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_4.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_4.style.display = 'block';
        });
        break;
    case 5:
        // Click the box to hear the duck quack sound
        box_5.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 5){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_5.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_5.style.display = 'block';
        });
        break;
    case 6:
        // Click the box to hear the duck quack sound
        box_6.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 6){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_6.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_6.style.display = 'block';
        });
        break;
    case 7:
        // Click the box to hear the duck quack sound
        box_7.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 7){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_7.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_7.style.display = 'block';
        });
        break;
    case 8:
        // Click the box to hear the duck quack sound
        box_8.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 8){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_8.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_8.style.display = 'block';
        });
        break;
    case 9:
        // Click the box to hear the duck quack sound
        box_9.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 9){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_9.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_9.style.display = 'block';
        });
        break;
    case 10:
        // Click the box to hear the duck quack sound
        box_10.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 10){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_10.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_10.style.display = 'block';
        });
        break;

    /* ----------------------- (11 - 20) ------------------------- */
    case 11:
        // Click the box to hear the duck quack sound
        box_11.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 11){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_11.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_11.style.display = 'block';
        });
        break;
    case 12:
        // Click the box to hear the duck quack sound
        box_12.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 12){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_12.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_12.style.display = 'block';
        });
        break;
    case 13:
        // Click the box to hear the duck quack sound
        box_13.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 13){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_13.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_13.style.display = 'block';
        });
        break;
    case 14:
        // Click the box to hear the duck quack sound
        box_14.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 14){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_14.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_14.style.display = 'block';
        });
        break;
    case 15:
        // Click the box to hear the duck quack sound
        box_15.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 15){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_15.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_15.style.display = 'block';
        });
        break;
    case 16:
        // Click the box to hear the duck quack sound
        box_16.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 16){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_16.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_16.style.display = 'block';
        });
        break;
    case 17:
        // Click the box to hear the duck quack sound
        box_17.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 17){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_17.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_17.style.display = 'block';
        });
        break;
    case 18:
        // Click the box to hear the duck quack sound
        box_18.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 18){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_18.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_18.style.display = 'block';
        });
        break;
    case 19:
        // Click the box to hear the duck quack sound
        box_19.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 19){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_19.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_19.style.display = 'block';
        });
        break;
    case 20:
        // Click the box to hear the duck quack sound
        box_20.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 20){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_20.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_20.style.display = 'block';
        });
        break;

    /* ----------------------- (21 - 30) ------------------------- */
    case 21:
        // Click the box to hear the duck quack sound
        box_21.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 21){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_21.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_21.style.display = 'block';
        });
        break;
    case 22:
        // Click the box to hear the duck quack sound
        box_22.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 22){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_22.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_22.style.display = 'block';
        });
        break;
    case 23:
        // Click the box to hear the duck quack sound
        box_23.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 23){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_23.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_23.style.display = 'block';
        });
        break;
    case 24:
        // Click the box to hear the duck quack sound
        box_24.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 24){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_24.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_24.style.display = 'block';
        });
        break;
    case 25:
        // Click the box to hear the duck quack sound
        box_25.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 25){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_25.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_25.style.display = 'block';
        });
        break;
    case 26:
        // Click the box to hear the duck quack sound
        box_26.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 26){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_26.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_26.style.display = 'block';
        });
        break;
    case 27:
        // Click the box to hear the duck quack sound
        box_27.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 27){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_27.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_27.style.display = 'block';
        });
        break;
    case 28:
        // Click the box to hear the duck quack sound
        box_28.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 28){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_28.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_28.style.display = 'block';
        });
        break;
    case 29:
        // Click the box to hear the duck quack sound
        box_29.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 29){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_29.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_29.style.display = 'block';
        });
        break;
    case 30:
        // Click the box to hear the duck quack sound
        box_30.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 30){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_30.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_30.style.display = 'block';
        });
        break;

    /* ----------------------- (31 - 40) ------------------------- */
    case 31:
        // Click the box to hear the duck quack sound
        box_31.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 31){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_31.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_31.style.display = 'block';
        });
        break;
    case 32:
        // Click the box to hear the duck quack sound
        box_32.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 32){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_32.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_32.style.display = 'block';
        });
        break;
    case 33:
        // Click the box to hear the duck quack sound
        box_33.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 33){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_33.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_33.style.display = 'block';
        });
        break;
    case 34:
        // Click the box to hear the duck quack sound
        box_34.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 34){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_34.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_34.style.display = 'block';
        });
        break;
    case 35:
        // Click the box to hear the duck quack sound
        box_35.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 35){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_35.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_35.style.display = 'block';
        });
        break;
    case 36:
        // Click the box to hear the duck quack sound
        box_36.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 36){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_36.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_36.style.display = 'block';
        });
        break;
    case 37:
        // Click the box to hear the duck quack sound
        box_37.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 37){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_37.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_37.style.display = 'block';
        });
        break;
    case 38:
        // Click the box to hear the duck quack sound
        box_38.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 38){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_38.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_38.style.display = 'block';
        });
        break;
    case 39:
        // Click the box to hear the duck quack sound
        box_39.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 39){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_39.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_39.style.display = 'block';
        });
        break;
    case 40:
        // Click the box to hear the duck quack sound
        box_40.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 40){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_40.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_40.style.display = 'block';
        });
        break;

    /* ----------------------- (41 - 50) ------------------------- */
    case 41:
        // Click the box to hear the duck quack sound
        box_41.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 41){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_41.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_41.style.display = 'block';
        });
        break;
    case 42:
        // Click the box to hear the duck quack sound
        box_42.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 42){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_42.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_42.style.display = 'block';
        });
        break;
    case 43:
        // Click the box to hear the duck quack sound
        box_43.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 43){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_43.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_43.style.display = 'block';
        });
        break;
    case 44:
        // Click the box to hear the duck quack sound
        box_44.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 44){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_44.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_44.style.display = 'block';
        });
        break;
    case 45:
        // Click the box to hear the duck quack sound
        box_45.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 45){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_45.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_45.style.display = 'block';
        });
        break;
    case 46:
        // Click the box to hear the duck quack sound
        box_46.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 46){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_46.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_46.style.display = 'block';
        });
        break;
    case 47:
        // Click the box to hear the duck quack sound
        box_47.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 47){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_47.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_47.style.display = 'block';
        });
        break;
    case 48:
        // Click the box to hear the duck quack sound
        box_48.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 48){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_48.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_48.style.display = 'block';
        });
        break;
    case 49:
        // Click the box to hear the duck quack sound
        box_49.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 49){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_49.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_49.style.display = 'block';
        });
        break;
    case 50:
        // Click the box to hear the duck quack sound
        box_50.addEventListener('click', function(){

            // The audio play depends on match case
            if(randomNumber == 50){
                duckQuack.play();

                // Display winner card
                winnerCard.style.display = 'block';
                winnerCard.play();

                outroTrack.play();
            }

            /* The box color changes */
            box_50.style.backgroundColor = 'var(--Sazerac)';

            /* The Golden Duck appears */
            img_Duck_50.style.display = 'block';
        });
        break;

    default:
}

/* ----------------------- (1 - 10) ------------------------- */

// Click the box to hear the laugh sound
box_1.addEventListener('click', function(){
    if(randomNumber == 1){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }

});

// Click the box to hear the laugh sound
box_2.addEventListener('click', function(){
    if(randomNumber == 2){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }

});

// Click the box to hear the laugh sound
box_3.addEventListener('click', function(){
    if(randomNumber == 3){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_4.addEventListener('click', function(){
    if(randomNumber == 4){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_5.addEventListener('click', function(){
    if(randomNumber == 5){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_6.addEventListener('click', function(){
    if(randomNumber == 6){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_7.addEventListener('click', function(){
    if(randomNumber == 7){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_8.addEventListener('click', function(){
    if(randomNumber == 8){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_9.addEventListener('click', function(){
    if(randomNumber == 9){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_10.addEventListener('click', function(){
    if(randomNumber == 10){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

/* ----------------------- (11 - 20) ------------------------- */

// Click the box to hear the laugh sound
box_11.addEventListener('click', function(){
    if(randomNumber == 11){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_12.addEventListener('click', function(){
    if(randomNumber == 12){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_13.addEventListener('click', function(){
    if(randomNumber == 13){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_14.addEventListener('click', function(){
    if(randomNumber == 14){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_15.addEventListener('click', function(){
    if(randomNumber == 15){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_16.addEventListener('click', function(){
    if(randomNumber == 16){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_17.addEventListener('click', function(){
    if(randomNumber == 17){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_18.addEventListener('click', function(){
    if(randomNumber == 18){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_19.addEventListener('click', function(){
    if(randomNumber == 19){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_20.addEventListener('click', function(){
    if(randomNumber == 20){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

/* ----------------------- (21 - 30) ------------------------- */

// Click the box to hear the laugh sound
box_21.addEventListener('click', function(){
    if(randomNumber == 21){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_22.addEventListener('click', function(){
    if(randomNumber == 22){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_23.addEventListener('click', function(){
    if(randomNumber == 23){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_24.addEventListener('click', function(){
    if(randomNumber == 24){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_25.addEventListener('click', function(){
    if(randomNumber == 25){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_26.addEventListener('click', function(){
    if(randomNumber == 26){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_27.addEventListener('click', function(){
    if(randomNumber == 27){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_28.addEventListener('click', function(){
    if(randomNumber == 28){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_29.addEventListener('click', function(){
    if(randomNumber == 29){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_30.addEventListener('click', function(){
    if(randomNumber == 30){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

/* ----------------------- (31 - 40) ------------------------- */

// Click the box to hear the laugh sound
box_31.addEventListener('click', function(){
    if(randomNumber == 31){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_32.addEventListener('click', function(){
    if(randomNumber == 32){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_33.addEventListener('click', function(){
    if(randomNumber == 33){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_34.addEventListener('click', function(){
    if(randomNumber == 34){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_35.addEventListener('click', function(){
    if(randomNumber == 35){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_36.addEventListener('click', function(){
    if(randomNumber == 36){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_37.addEventListener('click', function(){
    if(randomNumber == 37){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_38.addEventListener('click', function(){
    if(randomNumber == 38){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_39.addEventListener('click', function(){
    if(randomNumber == 39){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_40.addEventListener('click', function(){
    if(randomNumber == 40){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

/* ----------------------- (41 - 50) ------------------------- */

// Click the box to hear the laugh sound
box_41.addEventListener('click', function(){
    if(randomNumber == 41){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_42.addEventListener('click', function(){
    if(randomNumber == 42){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_43.addEventListener('click', function(){
    if(randomNumber == 43){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_44.addEventListener('click', function(){
    if(randomNumber == 44){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_45.addEventListener('click', function(){
    if(randomNumber == 45){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_46.addEventListener('click', function(){
    if(randomNumber == 46){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_47.addEventListener('click', function(){
    if(randomNumber == 47){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_48.addEventListener('click', function(){
    if(randomNumber == 48){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_49.addEventListener('click', function(){
    if(randomNumber == 49){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});

// Click the box to hear the laugh sound
box_50.addEventListener('click', function(){
    if(randomNumber == 50){
        duckQuack.play();
    }else{
        /* Laugh sound */
        laughTrack.play();

        // Show the element
        tryAgain.style.display = 'block';

        // Set a timeout to hide the element after a certain duration (e.g., 4 seconds)
        setTimeout(function () {
        // Hide the element
        tryAgain.style.display = 'none';
        }, 4000);
    }
});


