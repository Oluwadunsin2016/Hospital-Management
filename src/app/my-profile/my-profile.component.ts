import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BasicInformationComponent } from '../basic-information/basic-information.component';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  public existed_patient:any='';

  ngOnInit(): void {
 let existedPatientId=JSON.parse(localStorage.getItem('currentPatientId'))
 let existedPatients=JSON.parse(localStorage.getItem('registeredPatients'))
 this.existed_patient=existedPatients.find((val:any,ind:any)=>ind==existedPatientId)
 console.log(this.existed_patient);
  }

  edit=()=>{
  let dialogConfig= new MatDialogConfig();
  dialogConfig.autoFocus=true;
  dialogConfig.disableClose=true;
  this.dialog.open(BasicInformationComponent,dialogConfig)
  
  }

}
