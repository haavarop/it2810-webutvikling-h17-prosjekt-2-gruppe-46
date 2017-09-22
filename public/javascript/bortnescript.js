
var drinkup=1;
function drinkUp() {
    if (drinkup=== 0){
        document.getElementById("1-head").innerHTML = "Straight from the bottle!";
        document.getElementById("1").innerHTML = "Drink from the bottle. Don't mix that shit!";
        document.getElementById("1-img").src = 'images/bortne/whiskey-girls.jpg';
        document.getElementById("1-button").innerHTML ="Take me back to single malt scotch!";
        drinkup=1;
    }
    else{
        document.getElementById("1-head").innerHTML = "Single malt scotch";
        document.getElementById("1").innerHTML = "Single malt Scotch is single malt whisky made in Scotland.\n" +
            "            To be a single malt scotch the whisky must have been distilled at a single distillery using a pot still distillation process and made from a mash of malted grain.\n" +
            "            As with any Scotch whisky, a single malt Scotch must be distilled in Scotland and matured in oak casks in Scotland for at least three years, and one day.";
        document.getElementById("1-img").src = 'images/bortne/OD-BJ169_SINGLE_M_20160127123528.jpg';
        document.getElementById("1-button").innerHTML="Want to learn a single malt scotch drink?";
        drinkup=0;
    }

}
var oldfashion = 1;
function oldFashion() {
    if (oldfashion===0) {
        document.getElementById("2-head").innerHTML = "Old fashioned";
        document.getElementById("2").innerHTML = "<ul> <li>4.5cl Bourbon whiskey</li> <li>2 dashes of Angostura bitters</li> <li>1 sugar cube</li> <li>Soda water</li></ul>" +
            "Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved.\n" +
            "Fill the glass with ice cubes and add whiskey.\n" +
            "\n" +
            "Garnish with orange twist, and a cocktail cherry.";
        document.getElementById("2-img").src = 'images/bortne/bourbon-old-fashioned.jpg';
        document.getElementById("2-button").innerHTML = "Take me back to bourbon whiskey!";
        oldfashion = 1;
    }
    else{
        document.getElementById("2-head").innerHTML = "Bourbon whiskey";
        document.getElementById("2").innerHTML = "Bourbon whiskey is a type of American whiskey: a barrel-aged distilled spirit made primarily from corn."+
        "The name is derived from the French Bourbon dynasty, although it is unclear precisely what inspired the whiskey's name" +
        "(contenders include Bourbon County in Kentucky and Bourbon Street in New Orleans)."+
        "Bourbon has been distilled since the 18th century.";
        document.getElementById("2-img").src = 'images/bortne/bourbon-whiskey.jpg';
        document.getElementById("2-button").innerHTML = "Want to learn a bourbon whiskey drink?";
        oldfashion = 0;

    }

}

var whiskeysour = 1;
function whiskeySour() {
    if (whiskeysour ===0){
    document.getElementById("3-head").innerHTML = "Whiskey Sour";
    document.getElementById("3").innerHTML = "<ul> <li>4.5cl Rye whiskey</li> <li>2cl fresh lime juice</li> <li>1.5cl Gomme syrup</li> <li>Dash of eggwhite</li></ul>" +
        "Shake with ice. Strain into chilled glass, garnish and serve." +
        "If served 'On the rocks', strain ingredients into old-fashioned glass filled with " +
        "with garnish from a orange twist or lemon twist and a cocktail cherry.";
    document.getElementById("3-img").src = 'images/bortne/fa-Whiskey-Sour.jpg';
    document.getElementById("3-button").innerHTML = "Take me back to Rye whiskey!";
    whiskeysour= 1;
    }
    else{
        document.getElementById("3-head").innerHTML = "Rye whiskey";
        document.getElementById("3").innerHTML = "In the United States, rye whiskey is, by law, made from a mash of at least 51 percent rye." +
        "It is distilled to no more than 160 U.S. proof (80% abv), and aged in charred, new oak barrels and have a spicy or fruity flavor" +
        "Rye whiskey that has been so aged for at least two years and has not been blended with other spirits may be further designated as straight, as in straight rye whiskey."   ;
        document.getElementById("3-img").src = 'images/bortne/d21c743e9f154217dcc447f6354eaaac.jpg';
        document.getElementById("3-button").innerHTML = "Want to learn a rye whiskey drink?"
        whiskeysour=0;
    }
}

var music = new Audio('music/wait_a_minute.mp3');
var playing = 0;
function playMusic() {
    if (playing ===0){
        music.play();
        playing=1;
    }
    else{
        music.pause();
        playing=0;
    }

}

