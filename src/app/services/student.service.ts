import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, Subject, tap } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:3500';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  private _created$ = new Subject<Student>();
  created$ = this._created$.asObservable();

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl + '/getAll');
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(
      this.baseUrl + '/insertOne', student, this.httpOptions)
      .pipe(
        tap(s => this._created$.next(s))
        
    );    
  }

  
}
