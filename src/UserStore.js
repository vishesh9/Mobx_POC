import { action, makeObservable, observable } from "mobx";
export class UserStore {
  users = [
    { id: 1, text: "Vishaish", email: true, sms: false, newsletter: false },
    {
      id: 2,
      text: "John",
      email: false,
      sms: true,
      newsletter: true
    },
    { id: 3, text: "Dustin", email: false, sms: false, newsletter: true }
  ];

  constructor() {
    console.log("Created a store");
    makeObservable(this, {
      users: observable,
      toggleEmail: action,
      toggleSms: action,
      toggleNewsLetter: action
    });
  }

  toggleEmail(index) {
    this.users[index].email = !this.users[index].email;
  }

  toggleSms(index) {
    this.users[index].sms = !this.users[index].sms;
  }

  toggleNewsLetter(index) {
    this.users[index].newsletter = !this.users[index].newsletter;
  }
}
