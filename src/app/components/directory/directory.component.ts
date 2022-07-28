import { Component, OnInit } from '@angular/core';
import { Employee, EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  employees: Employee[] = [];
 
    constructor(service: EmployeesService) {
        this.employees = service.getEmployees();
    }

  ngOnInit(): void {
  }

}
