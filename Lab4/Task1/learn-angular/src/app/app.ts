import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Comments } from './comments/comments';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User, Comments, NgOptimizedImage, RouterLink],
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
  name = 'Angular Student';

  showSecretMessage() {
    this.message = 'Way to go ';
  }

  userName = 'Angular Student';

  onNotify() {
  alert('Message received from child component!');
  }
}

