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
    var enemiesDefeated = 0;

    // Variable for game over?
    var gameOver = false;

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

    // $("#myPlayer-div, #enemies-div, #defender-div, #battle-div").empty();

    // Reset all the health values
    $("#captain-america-character").children(".health").html(cptAmerica.health);
    $("#the-flash-character").children(".health").html(theFlash.health);
    $("#wonderwoman-character").children(".health").html(wonderWoman.health);
    $("#loki-character").children(".health").html(loki.health);

    // Remove all new classes of all the characters and reset back to available
    $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
    var available = $(".available-character").show();
    $("#characters-div").html(available);

    // Reset message on a timeout function
    $("#battle-messages").append("Resetting Game...");
    var logReset = function () {
        $("#battle-messages").empty();
    };
    setTimeout(logReset, 3000);
    
    $("#attack").show();
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
            // Check to see if div has "chosen-character" class and show message
            if($("#captain-america-character").hasClass("chosen-character")) {
                $("#battle-messages").append("<div>Are you mad!? You can't fight yourself. Choose a rival.</div>");
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
            // Check to see if div has "chosen-character" class and show message
            if($("#the-flash-character").hasClass("chosen-character")) {
                $("#battle-messages").append("<div>Are you mad!? You can't fight yourself. Choose a rival.</div>");
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
            // Check to see if div has "chosen-character" class and show message
            if($("#wonderwoman-character").hasClass("chosen-character")) {
                $("#battle-messages").append("<div>Are you mad!? You can't fight yourself. Choose a rival.</div>");
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
            // Check to see if div has "chosen-character" class and show message
            if($("#loki-character").hasClass("chosen-character")) {
                $("#battle-messages").append("<div>Are you mad!? You can't fight yourself. Choose a rival.</div>");
            }
        }
    });

    // Attack Button (On Click)
    $("#attack").on("click", function() {
        // Log "Attacking"
        console.log("Attacking");
    
        // On click only works if isPlayerChosen/isDefenderChosen are true and gameOver is false.
        if (isPlayerChosen && isDefenderChosen && (gameOver === false)) {
          // isPlayerChosen(player) attacks isDefenderChosen(defender) && decrease isDefenderChosen(defender) health
          defender.health = defender.health - player.attack;
          // Update new health of defender when attacked
          $(".defender-character").children(".health").html(defender.health);
          // Show in log when player attacks defender
          $("#battle-messages").html("<p>You attacked " + defender.name + " for " + player.attack + " damage.<p>");
          console.log(`You attacked ${defender.name} for ${player.attack} damage. `);
          // User's attack power increases
          player.attack = player.attack + player.baseAttack;
    
          // If the defender's health is > 0 => defender attacks player
          if (defender.health > 0) {
            // defender attacks player && decrease player health
            player.health = player.health - defender.baseAttack;
            // Update new health of player when attacked
            $(".chosen-character").children(".health").html(player.health);
    
            // If player health > 0 => show damage to player
            if (player.health > 0) {
              $("#battle-messages").append("<p>" + defender.name + " attacked you back for " + defender.baseAttack + " damage.</p>");
              console.log(`${defender.name} attacked you back for ${defender.baseAttack} damage. `);
            } 
            
            // Else if player health < 0 => gameOver && show restart button
            else {
              gameOver = true;
              $("#battle-messages").html("<p>You have been defeated... sadface</p><p>Click below to play again!</p>");
              $("#restart").show();
            }
          } 
          
          // If defender health < 0 => enemiesDefeated++ and make player choose another rival
          else {
            enemiesDefeated++;
            isDefenderChosen = false;
            $("#battle-messages").html("<p>You have defeated " + defender.name + "." + " You have " + player.health + " health left. Choose another rival to battle!</p>");
            $(".defender-character").hide();
    
            // If enemiesDefeated === 3 => gameOver (win!)
            if (enemiesDefeated === 3) {
              gameOver = true;
              $("#battle-messages").html("<p>You have won the game!!!</p><p>Play again?</p>");
              $("#restart").show();
              $("#attack").hide();
            }
          };
        } 
        
        // Else if isPlayerChosen and gameOver are false, tell player to select superhero first
        else if ((isPlayerChosen === false) && (gameOver === false)) {
          $("#battle-messages").html("<p>You need to select a Superhero!</p>");
        } 
        // Else if isDefenderChosen and gameOver are false, tell player to select defender first
        else if ((isDefenderChosen === false) && (gameOver === false)) {
          $("#battle-messages").html("<p>You must choose a rival to battle!</p>");
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