import { Routes } from '@angular/router';
import { Home } from './home/home';
import { User } from './user/user';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'user', component: User },
  { path: 'about', component: About }
];