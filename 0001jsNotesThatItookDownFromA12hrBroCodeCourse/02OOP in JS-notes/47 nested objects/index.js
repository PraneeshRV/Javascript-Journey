// nested objects = Objects inside of other Objects.
//                               Allows you to represent more complex data structures
//                               Child Object is enclosed by a Parent Object

//                               Person{Address{}, ContactInfo{}}
//                               ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}  

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", 
                                                    "Bikini Bottom", 
                                                    "Int. Waters");

const person2 = new Person("Patrick", 37,   "128 Conch St.", 
                                                    "Bikini Bottom", 
                                                    "Int. Waters");

const person3 = new Person("Squidward", 45, "126 Conch St.", 
                                                    "Bikini Bottom", 
                                                    "Int. Waters");

console.log(person1.name);
console.log(person1.age); 
console.log(person1.address);                                   
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);