import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUpComponent } from './login-up/login-up.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MainComponent } from './main/main.component';
import { PtestComponent } from './ptest/ptest.component';
import { FirstAuthGuardGuard } from "./gaurds/first-auth-guard.guard";


const routes: Routes = [

  {path:'', component:LoginUpComponent},
  {path:'main', component:MainComponent},
  {path:'login/:path', component:LoginComponent},
  {path:"register", component:LoginUpComponent},
  // {path:"logout", redirectTo:"/login", pathMatch:"full"}
  {path:'logout',  component:LogoutComponent},
  {path:'product',component:PtestComponent, canActivate:[FirstAuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
