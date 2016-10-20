import { Injectable } from '@angular/core';

import { UserService } from '../../auth/services/user/user.service';

@Injectable()
export class LoggedOutGuard {
  constructor(user: UserService) {
    this._user = user;
  }

  canActivate() {
    return !this._user.isLoggedIn();
  }
}
