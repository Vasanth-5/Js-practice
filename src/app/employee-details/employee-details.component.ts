import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from '../services/employee-list.service';
import { IEmployee } from '../employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employees: IEmployee[] = [];
  id = this.activatedRoute.snapshot.params["id"];
  currentEmployee!: IEmployee;
  constructor(private employeeService: EmployeeListService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadEmployee()
  }
  loadEmployee() {
    this.employeeService.getEmployees().subscribe((response) => {
      this.currentEmployee = response.data.filter((employee) => employee.id == this.id)[0]

    })
  }

}
