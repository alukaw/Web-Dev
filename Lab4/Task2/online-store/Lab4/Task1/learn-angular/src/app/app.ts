import { Component, signal, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Comments } from './comments/comments';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormControl,  Validators } from '@angular/forms';
import { CarService } from './car';
import { LowerCasePipe } from '@angular/common';
import { DatePipe, CurrencyPipe, PercentPipe } from '@angular/common';
import { ReversePipe } from './reverse-pipe';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User, Comments, NgOptimizedImage, RouterLink, FormsModule, ReactiveFormsModule, LowerCasePipe, DatePipe, CurrencyPipe, PercentPipe, ReversePipe],
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


  username = 'YoungTech';

  today = new Date();
  price = 12345.678;
  discount = 0.25;

  word = 'You are a champion';

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

