import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from '../auth/components/login/login.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { LoggedOutGuard } from './guards/logged-out.guard';

export const routes = [
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoggedOutGuard] }
];
