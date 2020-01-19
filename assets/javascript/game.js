var randNum = Math.floor(Math.random() * 102) + 19
var crystal1 = Math.floor(Math.random() * 12) + 1
var crystal2 = Math.floor(Math.random() * 12) + 1
var crystal3 = Math.floor(Math.random() * 12) + 1
var crystal4 = Math.floor(Math.random() * 12) + 1 
var wins = 0
var losses = 0
var userScore = 0
var crystal1 = Math.floor(Math.random() * 12) + 1
var crystal2 = Math.floor(Math.random() * 12) + 1


$(document).ready(function() {

    function startGame() {
        $("#randNum").text(randNum)
        $("#wins").text("Wins: " + wins)
        $("#losses").text("Losses: " + losses)
        $("#userScore").text(userScore)
    }

    $("#crystal1").on("click", function() {
        userScore += crystal1
        $("#userScore").text(userScore)
    });

    $("#crystal2").on("click", function() {
        userScore += crystal2
        $("#userScore").text(userScore)
    });

    $("#crystal3").on("click", function() {
        userScore += crystal3
        $("#userScore").text(userScore)
    });

    $("#crystal4").on("click", function() {
        userScore += crystal4
        $("#userScore").text(userScore)
    });

    startGame()

})