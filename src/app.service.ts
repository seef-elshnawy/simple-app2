import { Injectable } from '@nestjs/common';

const User = [
  {
    id: null,
    name: '',
    email: '',
  },
];
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGreething(): string {
    return 'welcome to my server';
  }

  sendGreething(greet: string, userId: number): string {
    const user = User.filter((user) => user.id == userId) as any;
    return `${user.name} send ${greet}. thanks ${user.name}`;
  }

  signUp(name: string, email: string) {
    console.log(name);
    const id = Math.floor(1000 * Math.random() * 9000);
    const user = {
      id,
      name: name,
      email: email,
    };
    User.push(user);
    return user;
  }

  findAllUsers() {
    const users = User.map((l) => l);
    return users;
  }

  findOneUser(userId: number) {
    const user = User.filter((user) => user.id == userId);
    return user;
  }
}
