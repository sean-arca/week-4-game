// -- Global variables --
    // Has user selected a character?
    var isPlayerChosen = false;
    
    // Has user selected a defender?
    var isDefenderChosen = false;

    // Variable for player object {}
    var player = {};

    // Variable for defender object {}
    var defender = {};

    // Variables for enemies defeated (i = 0)
    var enemiesDefeated;

    // Variable for game over?
    var gameOver;

// -- Create Character Objects {} --
var cptAmerica = {
    name: "Cpt. America",
    health: 120,
    baseAttack: 8,
    attack: 8
};
  
var theFlash = {
    name: "The Flash",
    health: 100,
    baseAttack: 5,
    attack: 5
};
  
var wonderWoman = {
    name: "Wonderwoman",
    health: 150,
    baseAttack: 20,
    attack: 20
};
  
var loki = {
    name: "Loki",
    health: 180,
    baseAttack: 25,
    attack: 25
};

// -- Game Functions --
// Create function to reset game
function resetGame() {
    player = {};
    defender = {};
    enemiesDefeated = 0;
    isPlayerChosen = false;
    isDefenderChosen = false;
    gameOver = false;

    $("#myPlayer-div, #enemies-div, #defender-div, #battle-div").empty();

    // Reset all the health values
    $("#captain-america-character").children(".health").html(cptAmerica.health);
    $("#the-flash-character").children(".health").html(theFlash.health);
    $("#wonderwoman-character").children(".health").html(wonderWoman.health);
    $("#loki-character").children(".health").html(loki.health);

    // Remove all new classes of all the characters and reset back to available
    $(".character-image").removeClass("enemy-character defender-character").addClass("available-character");
    var available = $(".available-character").show();
    $("#characters-div").html(available);

    $("#battle-messages").empty();
    $("#restart").hide();
};

// Create functions to choose player and defender from character objects.
function initializeCharacter(chosenCharacter) {
    player.name = chosenCharacter.name;
    player.health = chosenCharacter.health;
    player.baseAttack = chosenCharacter.baseAttack;
    player.attack = chosenCharacter.attack;
};

function initializeDefender(chosenDefender) {
    defender.name = chosenDefender.name;
    defender.health = chosenDefender.health;
    defender.baseAttack = chosenDefender.baseAttack;
    defender.attack = chosenDefender.attack;
};

// Create function to move enemies to enemies div
function moveToEnemies() {
    $(".available-character").removeClass("available-character").addClass("enemy-character");
    $("#enemies-div").append($(".enemy-character"));
};

// -- Game Start --
// Run this when the HTML is loaded
$(document).ready(function() {
    
    // -- Event Handlers (On Clicks) --
    // Selecting Cpt. America (On Click)
    $("#captain-america-character").on("click", function () {
        console.log("Cpt. America has been selected."); // Testing

        // On click, if isPlayerChosen === false(start of game), set cptAmerica as character and display
        if(isPlayerChosen === false) {
            // Set the user/player character
            initializeCharacter(cptAmerica);
            isPlayerChosen = true;
            // Display the chosen character
            $("#captain-america-character").removeClass("available-character").addClass("chosen-character");
            $("#myPlayer-div").append(this);
            // Move the remaining characters to the enemies section
            moveToEnemies();
            // Announce "Cpt. America has been selected." in battle-messages
            $("#battle-messages").append("Cpt. America has been selected.");
        }
        
        // else if isPlayerChosen === true and isDefenderChosen === false, make Cpt. America an enemy and display
        else if ((isPlayerChosen === true) && (isDefenderChosen == false)) {
            // Check to see first if the div has the class "enemy-character"
            if($("#captain-america-character").hasClass("enemy-character")) {
                // Set the user's enemy
                initializeDefender(cptAmerica);
                isDefenderChosen = true;
                // Display cptAmerica to the defender section
                $("#captain-america-character").removeClass("enemy-character").addClass("defender-character");
                $("#defender-div").append(this);
                // Announce "You are now fighting Cpt. America." in battle-messages
                $("#battle-messages").append("<div>You are now fighting Cpt. America.</div>");
            }
        }
    });
    
    // Selecting The Flash (On Click)
    $("#the-flash-character").on("click", function () {
        console.log("The Flash has been selected."); // Testing

        // On click, if isPlayerChosen === false(start of game), set theFlash as character and display
        if(isPlayerChosen === false) {
            // Set the user/player character
            initializeCharacter(theFlash);
            isPlayerChosen = true;
            // Display the chosen character
            $("#the-flash-character").removeClass("available-character").addClass("chosen-character");
            $("#myPlayer-div").append(this);
            // Move the remaining characters to the enemies section
            moveToEnemies();
            // Announce "The Flash has been selected." in battle-messages
            $("#battle-messages").append("The Flash has been selected.");
        }
        
        // else if isPlayerChosen === true and isDefenderChosen === false, make The Flash an enemy and display
        else if ((isPlayerChosen === true) && (isDefenderChosen == false)) {
            // Check to see first if the div has the class "enemy-character"
            if($("#the-flash-character").hasClass("enemy-character")) {
                // Set the user's enemy
                initializeDefender(theFlash);
                isDefenderChosen = true;
                // Display theFlash to the defender section
                $("#the-flash-character").removeClass("enemy-character").addClass("defender-character");
                $("#defender-div").append(this);
                // Announce "You are now fighting The Flash" in battle-messages
                $("#battle-messages").append("<div>You are now fighting The Flash.</div>");
            }
        }
    });

    // Selecting Wonderwoman (On Click)
    $("#wonderwoman-character").on("click", function () {
        console.log("Wonderwoman has been selected."); // Testing

        // On click, if isPlayerChosen === false(start of game), set wonderWoman as character and display
        if(isPlayerChosen === false) {
            // Set the user/player character
            initializeCharacter(wonderWoman);
            isPlayerChosen = true;
            // Display the chosen character
            $("#wonderwoman-character").removeClass("available-character").addClass("chosen-character");
            $("#myPlayer-div").append(this);
            // Move the remaining characters to the enemies section
            moveToEnemies();
            // Announce "Wonderwoman has been selected." in battle-messages
            $("#battle-messages").append("Wonderwoman has been selected.");
        }
        
        // else if isPlayerChosen === true and isDefenderChosen === false, make Wonderwoman an enemy and display
        else if ((isPlayerChosen === true) && (isDefenderChosen == false)) {
            // Check to see first if the div has the class "enemy-character"
            if($("#wonderwoman-character").hasClass("enemy-character")) {
                // Set the user's enemy
                initializeDefender(wonderWoman);
                isDefenderChosen = true;
                // Display wonderWoman to the defender section
                $("#wonderwoman-character").removeClass("enemy-character").addClass("defender-character");
                $("#defender-div").append(this);
                // Announce "You are now fighting Wonderwoman." in battle-messages
                $("#battle-messages").append("<div>You are now fighting Wonderwoman.</div>");
            }
        }
    });

    // Selecting Loki (On Click)
    $("#loki-character").on("click", function () {
        console.log("Loki has been selected."); // Testing

        // On click, if isPlayerChosen === false(start of game), set loki as character and display
        if(isPlayerChosen === false) {
            // Set the user/player character
            initializeCharacter(loki);
            isPlayerChosen = true;
            // Display the chosen character
            $("#loki-character").removeClass("available-character").addClass("chosen-character");
            $("#myPlayer-div").append(this);
            // Move the remaining characters to the enemies section
            moveToEnemies();
            // Announce "Loki has been selected." in battle-messages
            $("#battle-messages").append("Loki has been selected.");
        }
        
        // else if isPlayerChosen === true and isDefenderChosen === false, make loki an enemy and display
        else if ((isPlayerChosen === true) && (isDefenderChosen == false)) {
            // Check to see first if the div has the class "enemy-character"
            if($("#loki-character").hasClass("enemy-character")) {
                // Set the user's enemy
                initializeDefender(loki);
                isDefenderChosen = true;
                // Display loki to the defender section
                $("#loki-character").removeClass("enemy-character").addClass("defender-character");
                $("#defender-div").append(this);
                // Announce "You are now fighting Loki." in battle-messages
                $("#battle-messages").append("<div>You are now fighting Loki.</div>");
            }
        }
    });


    // Empty battle messages
    $("#battle-messages").empty();

    // Hide Restart button at the beginning
    $("#restart").hide();

    // Restart (On Click)
    $("#restart").on("click", function() {
        console.log("Restarting Game...");
    
        resetGame();
    });
});




// -------- Game Rules --------
// Player will choose a character by clicking on the fighter's picture. (on click event)
// Player will fight as that character for the rest of the game.
    // Each character in the game has 3 attributes:
        // Health Points
        // Attack Power
        // Counter Attack Power
// Player must then defeat all of the remaining fighters.
// Player chooses an opponent by clicking on an enemy's picture. (on click event)
// Enemies should be moved to a different area of the screen, the defender area.
// The Health Points, Attack Power and Counter Attack Power of each character must differ.

// -- Game ready when all is set --
// Once both fighter and defender are set, the player will now be able to click the attack button.

// -- Attacks --
// Whenever the player clicks attack, their character damages the defender.
    // Each time the player attacks, their character's Attack Power increases by its base Attack Power.
        // For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).
    // The opponent will lose HP (health points).
        // These points are displayed at the bottom of the defender's picture.
// The opponent character will instantly counter the attack.
    //The enemy character only has Counter Attack Power.
        //Unlike the player's Attack Points, Counter Attack Power never changes.
    // When that happens, the player's character will lose some of their HP.
        // These points are shown at the bottom of the player character's picture.
// The player will keep hitting the attack button in an effort to defeat their opponent.
// When the defender's HP is reduced to zero or below, remove the enemy from the defender area.
    // The player character can now choose a new opponent.

// -- Win/Loss Conditions --
// The player wins the game by defeating all enemy characters.
// The player loses the game the game if their character's HP falls to zero or below.

// -- Other Info --
// No characters in the game can heal or recover Health Points.
// A winning player must pick their characters wisely by first fighting an enemy with low Counter Attack Power. This will allow them to grind Attack Power and to take on enemies before they lose all of their Health Points. Healing options would mess with this dynamic.
// Your players should be able to win and lose the game no matter what character they choose.
    // The challenge should come from picking the right enemies, not choosing the strongest player