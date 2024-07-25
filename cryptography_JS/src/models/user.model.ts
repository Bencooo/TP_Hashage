export interface User {
    Name: string;
    Address: string;
  }
  
  export class UserModel implements User {
    constructor(
      public Name: string,
      public Address: string
    ) {}
  }
  