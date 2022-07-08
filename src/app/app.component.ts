import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstProject';

    constructor(public rout:Router) { }

public existed:any='';

  ngOnInit(): void {
 let existedPatientId=JSON.parse(localStorage.getItem('currentPatientId'))
 console.log(existedPatientId);
 let status=JSON.parse(localStorage.getItem('Status'))
 
if (existedPatientId!=null || existedPatientId!='' || existedPatientId!=undefined) {
this.existed=status
}else{
  this.existed=false
}
  }

  logout=()=>{
  let con=confirm('Are you sure you want to logout?')
if (con) {
    localStorage.removeItem('currentPatientId')
  this.existed=false
  localStorage.setItem('Status', JSON.stringify(this.existed))
this.rout.navigate(['/login'])

}
  }

}
