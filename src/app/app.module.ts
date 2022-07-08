import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { MedicalInformationComponent } from './medical-information/medical-information.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { BUTHComponent } from './buth/buth.component';
import { AboutUsComponent } from './about-us/about-us.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    MyProfileComponent,
    PatientListComponent,
    PatientDetailsComponent,
    MedicalInformationComponent,
    BasicInformationComponent,
    BUTHComponent,
    AboutUsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents:[MedicalInformationComponent, BasicInformationComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
