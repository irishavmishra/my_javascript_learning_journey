class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    static classInfo(){
        return "this is person";
    }

    static desc = "rj isdon of universe"

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

console.log(Animal.classInfo());

console.log(Animal.desc)