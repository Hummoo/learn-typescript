var Stark = (function () {
    function Stark() {
        this.name = "Bradon";
        this.saying = "Moo";
    }
    Stark.prototype.hello = function (personName) {
        console.log("Hello, " + personName);
    };
    return Stark;
}());
Stark.castle = "Winterfell";
var ned = new Stark();
ned.saying = "Winter is coming";
console.log(Stark.castle);
ned.hello("Robert");
