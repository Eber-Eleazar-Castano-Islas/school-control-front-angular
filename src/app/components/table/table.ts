import { Component } from '@angular/core';
import { NgFor} from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table.html',
  styleUrls: ['./table.css'],
})
export class Table {
    students = [
      { student_id: "D22390074", name: "John", lastName: "Doe", grade: "10th", group: "A", average: 85 },
      { student_id: "D22390075", name: "Jane", lastName: "Smith", grade: "11th", group: "B", average: 92 },
      { student_id: "D22390076", name: "Bob", lastName: "Johnson", grade: "9th", group: "C", average: 78 }
    ];
}
