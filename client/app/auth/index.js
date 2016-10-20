import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StorageService } from './services/storage/storage.service';
import { RequestService } from './services/request/request.service';
import { UserService } from './services/user/user.service';

import { LoginComponent } from './components/login/login.component';

const AUTH_PROVIDERS = [StorageService, RequestService, UserService];
const AUTH_DECLARATIONS = [LoginComponent];

@NgModule({
  declarations: [AUTH_DECLARATIONS],
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  exports:[AUTH_DECLARATIONS],
  providers: [AUTH_PROVIDERS]
})

export class AuthModule{}


/*export {
  StorageService,
  RequestService,
  UserService
};*/

/*export const AUTH_PROVIDERS = [StorageService, RequestService, UserService];
export const AUTH_DECLARATIONS = [LoginComponent];
*/
