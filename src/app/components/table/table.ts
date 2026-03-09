import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table.html',
  styleUrls: ['./table.css'],
})
export class Table implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
    this.studentService.created$.subscribe((s) => {
      this.students.push(s);
    });
  }

  // Método para cargar los estudiantes desde el servicio
  loadStudents(): void {
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
        console.log('Estudiantes', this.students);
      },
      error: (err) => console.error('Error al cargar estudiantes', err),
    });
  }
}
