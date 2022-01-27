class createUser3 {
  constructor(userName, userId) {
    //{}
    this.name = userName;
    this.id = userId;
  }

  getName() {
    console.log(this.name);
  }
}
//------------------------- class inheritance
class userAddr {
  constructor(city, country) {
    this.city = city;
    this.country = country;
  }
}

//multiple inheritance is not supported
//, multi level inheritance

class User extends userAddr {
  constructor(name, id, city, country) {
    super(city, country); //calls parent class constructor
    this.name = name;
    this.id = id;
  }
}

let user1 = new User("syed", 9, "Hyd", "India");
console.log(user1.country);
