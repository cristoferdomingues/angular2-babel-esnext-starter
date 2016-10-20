import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import template from './post-list-item.template.html';
import { UserService } from '../../../auth/services/user/user.service';

@Component({
  selector: 'post-list-item',
  template: template,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListItemComponent {
  @Input() post;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  getLoggedIn() {
    return this.userService.getLoggedIn();
  }
}
