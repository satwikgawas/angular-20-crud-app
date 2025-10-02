import { Component } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class StudentsComponent {
  students: Student[] = [];
  student: Student = { id: 0, name: '', email: '' };
  isEdit = false;

  constructor(private studentService: StudentService) {}
  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

  addStudent() {
    if (!this.student.name || !this.student.email) return;
    this.student.id = Date.now();

    this.students.push({ ...this.student });
    this.studentService.saveStudents(this.students);
    this.student = { id: 0, name: '', email: '' };
  }

  editStudent(s: Student) {
    this.student = { ...s };
    this.isEdit = true;
  }

  updateStudent() {
    const index = this.students.findIndex((x) => x.id == this.student.id);
    this.students[index] = this.student;
    this.studentService.saveStudents(this.students);
    this.student = { id: 0, name: '', email: '' };
    this.isEdit = false;
  }

  deleteStudent(id: number) {
    debugger;
    this.students = this.students.filter((s) => s.id !== id);
    this.studentService.saveStudents(this.students);
  }
}
