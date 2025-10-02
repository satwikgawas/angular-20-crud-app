import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private key = 'students';

  getStudents(): Student[] {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  saveStudents(students: Student[]): void {
    localStorage.setItem(this.key, JSON.stringify(students));
  }
}
