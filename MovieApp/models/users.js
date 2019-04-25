class User {
  constructor(email, password, username) {
    (this.email = this.validateEmail(email)),
      (this.password = this.validatePassword(password)),
      (this.username = this.validateUsername(username));
  }

  // Needs to be private ?
  validateEmail(email) {
    //const regex = new RegExp('^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email)) {
      return email;
    } else {
      throw new Error("Invalid Username: " + email.substring(1, 10));
    }
  }

  validatePassword(password) {
    return password;
  }

  validateUsername(username) {
    //let regex = new RegExp('^[a-zA-Z0-9]+([_-]?[a-zA-Z0-9])*$');
    let regex = /^[a-zA-Z0-9]+([_-]?[a-zA-Z0-9])*$/;
    if (regex.test(username)) {
      return username;
    } else {
      throw new Error("Invalid Username: " + username.substring(1, 10));
    }
  }
}

module.exports = User;
