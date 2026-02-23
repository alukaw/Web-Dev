import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn-angular');
  city = 'San Francisco';
  isLoggedIn = true;
  users = ['Anna', 'Bob', 'Charlie']; 
  isEditable = true;

  message = '';

  showSecretMessage() {
    this.message = 'Way to go ';
  }
  
  userName = 'Angular Student';
}

