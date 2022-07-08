import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  constructor() { }

  public existed_patients:any=''

  ngOnInit(): void {
   this.existed_patients = JSON.parse(localStorage.getItem('registeredPatients'));
   
  }

  view=(id:any)=>{
  localStorage.setItem('patientId', JSON.stringify(id))
  }
  del=(id:any)=>{
  let opinion=confirm('Are you sure you want to delete this patient?')
  if (opinion) {
   let currentPatients=this.existed_patients.filter((val:any,ind:any)=>ind!=id) 
   console.log(currentPatients);
   
  localStorage.setItem('registeredPatients', JSON.stringify(currentPatients))
location.reload();
  }
  }

}
