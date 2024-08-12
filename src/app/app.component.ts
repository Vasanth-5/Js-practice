import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from './services/employee-list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Employee Dashboard'
  constructor(private employeeService: EmployeeListService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.employeeService.getEmployees().subscribe(Response)

  };(error) => {
    console.error('Error:', error); // Handle the error if needed
  }
}
