import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditEmployeeInfoComponent } from './components/dashboard/edit-employee-info/edit-employee-info/edit-employee-info.component';



const routes: Routes = [ 
  { 
    path:'', 
    component: DashboardComponent ,
   
  },
  { 
    path:'edit-employee-info', 
    component: EditEmployeeInfoComponent ,
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }