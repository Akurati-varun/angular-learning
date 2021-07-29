import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { UserComponent } from './user/user.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';

const routes: Routes = [
  { path: 'ViewEmpoloyee', component: ViewEmpComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'ViewEmpoloyee/:id', component: ViewEmpComponent },
  { path: 'EditEmployee', component: EditEmpComponent },
  { path: 'QuantityIncrement', component: QuantityIncrementComponent },
  { path: 'EditEmployeeReactive', component: EditEmpReactiveComponent },
  { path: 'EditEmployeeReactive/:id', component: EditEmpReactiveComponent },
  { path: 'Employee', component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: 'UserDetails', component: UserComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
