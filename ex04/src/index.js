// Only change code below this line
var players = {
    7: "Muhamed Besic",
    10: "Miralem Pjanic",
    11: "Edin Dzeko"
};
function myFunction(myObj) {
    var player;
    var playerNumber = 10;
    player = myObj[playerNumber];
    return player;
}
console.log(myFunction(players));
// Only change code above this line
module.exports = { players, myFunction };