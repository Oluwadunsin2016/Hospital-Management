import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
public existed:any='';
public existed_patient:any='';

  ngOnInit(): void {
 let existedPatientId=JSON.parse(localStorage.getItem('currentPatientId'))
 let existedPatients=JSON.parse(localStorage.getItem('registeredPatients'))
 this.existed_patient=existedPatients.find((val:any,ind:any)=>ind==existedPatientId)
//  console.log(existedPatientId);
 let status=JSON.parse(localStorage.getItem('Status'))
//  console.log(this.existed_patient);
 
if (existedPatientId===null || existedPatientId==='' || existedPatientId===undefined) {
  this.existed=false

}else{

this.existed=status
}
//  console.log(this.existed);

  }
}
