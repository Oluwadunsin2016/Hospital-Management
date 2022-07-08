import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { MedicalInformationComponent } from '../medical-information/medical-information.component';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  constructor(public dialog:MatDialog) { }


  public current_patient:any='';
  public editmode:any='';
  public mode:any='';

  ngOnInit(): void {
  let patient_id=JSON.parse(localStorage.getItem('patientId'))
     let existed_patients = JSON.parse(localStorage.getItem('registeredPatients'));
     this.mode= JSON.parse(localStorage.getItem('editMode'));

this.current_patient=existed_patients.find((val, id)=>id==patient_id)
console.log(this.current_patient.Blood_Group);

if (this.current_patient.Blood_Group===undefined || this.current_patient.Genotype===undefined || this.current_patient.Blood_Presure===undefined || this.current_patient.HIV===undefined || this.current_patient.PCV===undefined || this.current_patient.Hepatitis===undefined || this.current_patient.Weight===undefined || this.current_patient.X_ray===undefined
||
this.current_patient.Blood_Group===null || this.current_patient.Genotype===null || this.current_patient.Blood_Presure===null || this.current_patient.HIV===null || this.current_patient.PCV===null || this.current_patient.Hepatitis===null || this.current_patient.Weight===null || this.current_patient.X_ray===null) {
 this.editmode=false
  localStorage.setItem('editMode',JSON.stringify(this.editmode))
}else{
  this.editmode=true
  localStorage.setItem('editMode',JSON.stringify(this.editmode))
}
console.log(this.mode);
  }

  upload=()=>{
  let dialogConfig= new MatDialogConfig()
  dialogConfig.disableClose=true;
  dialogConfig.autoFocus=true;
  this.dialog.open(MedicalInformationComponent,dialogConfig)
  }
  edit=()=>{
  let dialogConfig= new MatDialogConfig()
  dialogConfig.disableClose=true;
  dialogConfig.autoFocus=true;
  this.dialog.open(MedicalInformationComponent,dialogConfig)
  }

}
