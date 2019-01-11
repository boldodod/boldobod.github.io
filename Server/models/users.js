class modelUser {
  constructor() {
    this.users = [];
  }

  create(data) {
    const date = new Date();
    const user = {
      id: this.users.length + 1,
      firstname: data.body.firstname,
      lastname: data.body.lastname,
      othername: data.body.othername,
      email: data.body.email,
      phoneNumber: req.body.phoneNumber,
      registered: `${date.getFullYear()} - ${date.getMonth()} - ${date.getDay()}`,
      admin: req.body.admin,
    };
    return user;
  }
}
