import { Component } from '@angular/core';
import { StudentsComponent } from './students/students';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'crud-angular-app';
}
