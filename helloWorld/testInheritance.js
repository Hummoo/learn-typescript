var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name + " is dancing.");
    };
    return Person;
}());
var moo = new Person("Moo");
moo.dance();
var AwesomePerson = (function (_super) {
    __extends(AwesomePerson, _super);
    function AwesomePerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwesomePerson.prototype.dance = function () {
        _super.prototype.dance.call(this);
        console.log("So awesome!!");
    };
    return AwesomePerson;
}(Person));
var mint = new AwesomePerson("Mint");
mint.dance();
