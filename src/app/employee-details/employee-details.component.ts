import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  id: number | undefined
  employee: Employee = new Employee();

  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;
    });
  }

  deleteEmployee(id: number | undefined){
    this.employeeService.deleteEmployee(id).subscribe(data =>{
      console.log(data);
      this.goToEmployeeList();
    })
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}
