import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { NewGroupComponent } from '../new-group/new-group.component';
import { GroupComponent } from '../group/group.component';
import { EditGroupComponent } from '../edit-group/edit-group.component';
import { StudentComponent } from '../student/student.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent },
  {path: 'newGroup', component: NewGroupComponent },
  {path: 'addStudent', component: StudentComponent},
  {path: 'group/:$key', component: GroupComponent },
  {path: 'editGroup/:$key', component: EditGroupComponent },
  {path: '', component: HomeComponent },
  {path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
