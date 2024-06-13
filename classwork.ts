class User {
  name: string;
  username: string;
  emailAddress: string;
  age: number;

  constructor(
    name: string,
    username: string,
    emailAddress: string,
    age: number
  ) {
    this.name = name;
    this.username = username;
    this.emailAddress = emailAddress;
    this.age = age;
  }
}

interface UserWithRoles extends User {
  roles: string[];
}

class UserWithRolesClass extends User implements UserWithRoles {
  roles: string[];

  constructor(
    name: string,
    username: string,
    emailAddress: string,
    age: number,
    roles: string[]
  ) {
    super(name, username, emailAddress, age);
    this.roles = roles;
  }

  getAllJobTitles(): string[] {
    return this.roles;
  }
}

const user = new UserWithRolesClass(
  "John Doe",
  "jdoe",
  "jdoe@example.com",
  30,
  ["Developer", "Manager"]
);
console.log(user.getAllJobTitles()); // Output: ['Developer', 'Manager']
