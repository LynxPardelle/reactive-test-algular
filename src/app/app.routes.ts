import { Routes } from '@angular/router';
/* Components */
import { HomeComponent } from './core/components/home/home.component';
import { UsersComponent } from './users/components/users/users.component';
import { UserComponent } from './users/components/user/user.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ErrorComponent } from './core/components/error/error.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'user/:id',
    component: UserComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
