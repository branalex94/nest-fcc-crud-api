import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return {
      msg: 'Sign up',
    };
  }

  signin() {
    return {
      msg: 'Sign in',
    };
  }
}
