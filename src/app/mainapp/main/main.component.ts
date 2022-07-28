import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee} from 'src/app/services/employees.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  employees: Employee[] = [];
 
    constructor(service: EmployeesService ) {
        this.employees = service.getEmployees();
    }

  
    

  ngOnInit(): void {
  }

}
