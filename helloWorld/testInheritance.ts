class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    dance() {
        console.log(this.name + " is dancing.");
    }
}

var moo = new Person("Moo");
moo.dance();

class AwesomePerson extends Person {
    dance() {
        super.dance();
        console.log("So awesome!!");
    }
}

var mint = new AwesomePerson("Mint");
mint.dance();