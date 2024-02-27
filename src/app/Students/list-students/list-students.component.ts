import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  students: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getStudents(); // Call the method to fetch students when the component initializes
  }

  getStudents(): void {
    this.http.get('https://localhost:5001/api/student').subscribe({
      next: (response: any) => {
        this.students = response;
        console.log('Students:', this.students); // Log students data to console
      },
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }

  addStudent(): void {
    // Implement the logic to add a student
    // You can navigate to a new component or open a modal dialog to add a new student
    console.log('Add student clicked');
  }
}
