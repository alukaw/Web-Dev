import { Component, signal, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Comments } from './comments/comments';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormControl,  Validators } from '@angular/forms';
import { CarService } from './car';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User, Comments, NgOptimizedImage, RouterLink, FormsModule, ReactiveFormsModule],
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

  favoriteFramework = '';

  submittedFramework = '';

  onSubmit(form: any) {
    this.submittedFramework = form.value.framework;
  }
  
  nameControl = new FormControl('', [
  Validators.required,
  Validators.minLength(3)
  ]);

  private carService = inject(CarService);
  display = this.carService.getCars().join(' ⭐️ ');
}

