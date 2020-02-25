import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employeeArr = [
    {
      name : 'Haushiram',
      designation : 'Software Developer',
      salary : '25000 Rs'
    },
    {
      name : 'Ketan',
      designation : 'Software Analyst',
      salary : '30000 Rs'
    },
    {
      name : 'Amol',
      designation : 'Tester',
      salary : '29000 Rs'
    },
    {
      name : 'Rahul',
      designation : 'Software Developer',
      salary : '28000 Rs'
    }
  ]

  constructor(private router : Router, private dashboardservice : DashboardService,public dialog: MatDialog) { }

  ngOnInit() {
    this.dashboardservice.getEmployeeObjInfo.subscribe(data => {
      if(data){
        let index = data.index;
        this.employeeArr[index] = data
      }
    })
  }

  editInfo(employeeDetails,index){
    let obj = {
      dataEmp  : employeeDetails,
      indexVal : index
    }
    this.dashboardservice.storeEmployeeInfo(obj) // storing data in behaviour subject here
    this.router.navigate(['edit-employee-info'])
  }

  delete(index){
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        width: '500px',
        height : '200px',
        data: {

        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
       if(result){
        this.employeeArr.splice(index,1)
       }
      });

  }

}
