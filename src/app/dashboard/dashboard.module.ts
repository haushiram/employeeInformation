import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditEmployeeInfoComponent } from './components/dashboard/edit-employee-info/edit-employee-info/edit-employee-info.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from './components/dashboard/delete-dialog/delete-dialog.component';



@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  declarations: [DashboardComponent, EditEmployeeInfoComponent,DeleteDialogComponent],
  entryComponents : [DeleteDialogComponent]
})
export class DashboardModule { }
