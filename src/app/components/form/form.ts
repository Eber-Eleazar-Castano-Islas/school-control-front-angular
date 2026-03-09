import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css'],
})
export class Form implements OnInit {
  studentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
  ) {}

  ngOnInit() {
    this.studentForm = this.fb.group({
      student_id: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      grade: [null, [Validators.required, Validators.min(1), Validators.max(9)]],
      group: ['', Validators.required],
      average: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    });
  }

  onSubmit(): void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    const student: Student = this.studentForm.value;
    this.studentService.createStudent(student).subscribe({
      next: (s) => {
        console.log('Estudent', s);
        this.studentForm.reset();
      },
      error: (err) => console.error(err),
    });
  }
}
