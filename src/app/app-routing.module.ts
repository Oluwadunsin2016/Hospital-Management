import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BUTHComponent } from './buth/buth.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
{path:'', component: HomeComponent},
{path:'home', component: HomeComponent},
{path:'buth', component: BUTHComponent},
{path:'aboutUs', component:AboutUsComponent},
{path:'registration', component: RegistrationComponent},
{path:'login', component: LoginComponent},
{path:'myProfile', component:MyProfileComponent},
{path:'patientlist', children:[
{path:'', component:PatientListComponent},
{path:'patientdetail/:id', component:PatientDetailsComponent}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
