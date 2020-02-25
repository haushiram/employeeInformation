import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/dashboard/services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee-info',
  templateUrl: './edit-employee-info.component.html',
  styleUrls: ['./edit-employee-info.component.css']
})
export class EditEmployeeInfoComponent implements OnInit {
  employeeForm: FormGroup;
  employeeArr = [];
  index: any;

  constructor(private formBuilder: FormBuilder, private dashboardservice : DashboardService,private router : Router) { }

  ngOnInit() {
    this.getEmployeeData();
    this.initializeForm();
    // this.getEmployeeData();
  }


  initializeForm(){
    this.employeeForm = this.formBuilder.group({
      name: [this.employeeArr['name']],
      designation: [this.employeeArr['designation']],
      salary: [this.employeeArr['salary']]
     
  });
  }

  getEmployeeData(){
    this.dashboardservice.getEmployeeInfo.subscribe(data => {
      if(data){
        this.employeeArr = data.dataEmp
        this.index = data.indexVal
      
      }
    })
  }

  submit(){
    let empObj = {
      name : this.employeeForm.get('name').value,
      designation : this.employeeForm.get('designation').value,
      salary : this.employeeForm.get('salary').value,
      index : this.index
    }

    this.dashboardservice.storeEmployeeObjInfo(empObj);
    this.router.navigate(['/'])

  }

}
