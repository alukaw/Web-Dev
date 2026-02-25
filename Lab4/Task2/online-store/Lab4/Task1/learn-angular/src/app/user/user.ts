import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  readonly name = input<string>();
  readonly notify = output<void>();

  notifyParent() {
    this.notify.emit();
  }
}