class Stark {
    name: string = "Bradon";
    saying: string;

    static castle: string = "Winterfell";

    constructor() {
        this.saying = "Moo";
    }
    
    hello(personName: string) {
        console.log("Hello, " + personName);
    }
}

var ned = new Stark();
ned.saying = "Winter is coming";

console.log(Stark.castle);

ned.hello("Robert");