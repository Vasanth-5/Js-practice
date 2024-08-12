import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from '../services/employee-list.service';
import { IEmployee } from '../employee.model';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  title = 'Employee Dashboard';
  searchValue: any;
  employees: IEmployee[] = [];
  displayedColumns: string[] = ['id', 'name', 'salary', 'age'];
  dataSource: MatTableDataSource<IEmployee> = new MatTableDataSource<IEmployee>()
  filteredArray = [...this.employees];

  constructor(private employeeService: EmployeeListService) { }

  ngOnInit(): void {
    this.loadEmployees()
  }
  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe((response) => {
      this.employees = response.data
      this.dataSource.data = this.employees

    })
  }

  filterArray(event: any) {
    this.searchValue = event.target.value;
    // No users, empty list.
    if (!this.employees.length) {
      this.filteredArray = [];
      return;
    }

    if (!this.searchValue) {
      this.filteredArray = [...this.employees];
      this.dataSource.data = this.filteredArray;
      return;
    }
    this.filteredArray = this.employees.filter((employee: any) => Object.values(employee).some((value: any) => value.toString().toLowerCase().includes(this.searchValue.toLowerCase())))
    this.dataSource.data = this.filteredArray;

  }
}
