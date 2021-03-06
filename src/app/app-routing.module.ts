import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { PagenotfoundComponent } from 'src/app/components/pagenotfound/pagenotfound.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { WrongdetailsComponent } from './components/wrongdetails/wrongdetails.component';
import { CreateComponent } from './components/create/create.component';
import { ViewemployeeComponent } from './components/viewemployee/viewemployee.component';
import { UpdateemployeeComponent } from './components/updateemployee/updateemployee.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginformComponent },
  { path: 'wrongdetails', component: WrongdetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'create', component: CreateComponent },
  { path: 'employee/:id', component: ViewemployeeComponent },
  { path: 'update/:id', component: UpdateemployeeComponent },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
