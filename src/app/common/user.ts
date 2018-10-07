export class Role {
  public isAdmin: boolean;
}

export class User {
  public uid: string;
  public email: string;
  public role: Role;
}
