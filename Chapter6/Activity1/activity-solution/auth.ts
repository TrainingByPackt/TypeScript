interface ILogin {
  email: string;
  password: string;
}

export class Login {
  email: string;
  password: string;

  constructor(args: ILogin) {
    this.email = args.email;
    this.password = args.password;
  }
}

interface IAuth {
  user: Login;
  source: string;
}

export default class Auth {
  user: Login;
  source: string;

  constructor(args: IAuth) {
    this.user = args.user;
    this.source = args.source;
  }

  validUser(): boolean {
    const { email, password } = this.user;
    if (email === "admin@example.com" && password === "secret123") {
      return true;
    } else {
      return false;
    }
  }
}

const goodUser = new Login({
  email: "admin@example.com",
  password: "secret123"
});

const badUser = new Login({
  email: "admin@example.com",
  password: "whoops"
});

const authAttemptFromGoodUser = new Auth({
  user: goodUser,
  source: "Google"
});

authAttemptFromGoodUser.validUser(); //?

const authAttemptFromBadUser = new Auth({
  user: badUser,
  source: "Google"
});

authAttemptFromBadUser.validUser(); //?
