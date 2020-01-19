var randNum = Math.floor(Math.random() * 102) + 19
var crystal1 = Math.floor(Math.random() * 12) + 1
var crystal2 = Math.floor(Math.random() * 12) + 1
var crystal3 = Math.floor(Math.random() * 12) + 1
var crystal4 = Math.floor(Math.random() * 12) + 1 
var wins = 0
var losses = 0
var userScore = 0


$(document).ready(function() {

    function startGame() {
        userScore = 0
        randNum = Math.floor(Math.random() * 102) + 19
        crystal1 = Math.floor(Math.random() * 12) + 1
        crystal2 = Math.floor(Math.random() * 12) + 1
        crystal3 = Math.floor(Math.random() * 12) + 1
        crystal4 = Math.floor(Math.random() * 12) + 1 
        $("#randNum").text(randNum)
        $("#wins").text("Wins: " + wins)
        $("#losses").text("Losses: " + losses)
        $("#userScore").text(userScore)
    }

    function checkScore() {
        if (userScore === randNum) {
            wins++
            startGame()
        } 
        else if (userScore > randNum) {
            losses++
            startGame()
        }
    }

    $("#crystal1").on("click", function() {
        userScore += crystal1
        $("#userScore").text(userScore)
        checkScore()
    })

    $("#crystal2").on("click", function() {
        userScore += crystal2
        $("#userScore").text(userScore)
        checkScore()
    })

    $("#crystal3").on("click", function() {
        userScore += crystal3
        $("#userScore").text(userScore)
        checkScore()
    })

    $("#crystal4").on("click", function() {
        userScore += crystal4
        $("#userScore").text(userScore)
        checkScore()
    })

    startGame()

})