
//Objects with Functions

let obj = {
    JerseyNum: 7,
    PlayerName: "Cristiano Ronaldo",
    Teams: {
        a: "Sporting Lisbon",
        b: "Manchester United",
        c: "Real Madrid",
        d: "Juventus"
    },
    BestPlayer: function () {
        console.log("New Signing: " + this.PlayerName);
        console.log("New Player Jersey Num: " + this.JerseyNum);
    }
}
obj.e = "Ballon D'Or Winner";
/*console.log(obj);*/

obj.BestPlayer();
console.log("Previous Teams: " + obj.Teams.a +", " + obj.Teams.b +" and " + obj.Teams.c);
console.log("New Team: " + obj.Teams.d);