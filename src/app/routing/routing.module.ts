//Separated routing into it's own module to reduce the clutter in the main app module

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { NewGroupComponent } from '../new-group/new-group.component';
import { GroupComponent } from '../group/group.component';
import { EditGroupComponent } from '../edit-group/edit-group.component';
import { StudentComponent } from '../student/student.component';
import { NewClassListComponent } from '../new-class-list/new-class-list.component';
import { RollcallComponent } from '../rollcall/rollcall.component';

const routes: Routes = [
  //Declarations of all routes. Null routes are redirected to login. If the user is already
  //authorized, then they are redirected to the home page.
  {path: 'login', component: LoginComponent },
  {path: 'newGroup', component: NewGroupComponent },
  {path: 'addStudent', component: StudentComponent},
  {path: 'addClassList', component: NewClassListComponent},
  {path: 'group/:$key', component: GroupComponent },
  {path: 'rollcall/:key', component: RollcallComponent },
  {path: 'editGroup/:key', component: EditGroupComponent },
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
