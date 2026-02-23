import { Component, input} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
  template: ` <p>The user's name is {{ name() }}</p> `,
})
export class User {
  readonly name = input<string>();
}
