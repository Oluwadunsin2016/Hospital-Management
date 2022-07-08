import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

 


    public surname = '';
    public firstName = '';
  public lastName = '';
  public phoneNumber = '';
  public email = '';
  public file = '';
  public gender = 'Choose';
  public dob = '';
  public password = '';
  public currentPatient:any = '';
  public regPatients: any = [];
  public picture: any = '';

  public id:any=''
   public existed_patient:any='';


myImage!:Observable<any>

 onChange=($event:Event)=>{
  const target= $event.target as HTMLInputElement;
  console.log(target);
  
  const file:File=(target.files as FileList)[0];
  console.log(file);
  this.convertToBase64(file)
  }

  convertToBase64(file: File){
  const observable=new Observable((subscriber:Subscriber<any>)=>{
  this.readFile(file,subscriber)
  })
  observable.subscribe((converted)=>{
  this.myImage=converted
  })
  }
  readFile(file:File, subscriber:Subscriber<any>){
  const fileReader= new FileReader();
  fileReader.readAsDataURL(file)
  fileReader.onload=()=>{
  subscriber.next(fileReader.result)
  subscriber.complete()
  }
  fileReader.onerror=()=>{
  subscriber.error();
  subscriber.complete();
  }
  }


  constructor(public dialogRef: MatDialogRef<BasicInformationComponent>) {}

  ngOnInit(): void {
    this.id=JSON.parse(localStorage.getItem('currentPatientId'))
    this.regPatients=JSON.parse(localStorage.getItem('registeredPatients'))
   this.existed_patient=this.regPatients.find((val:any,ind:any)=>ind==this.id)
 

   this.surname = this.existed_patient.Surname;
   this.firstName = this.existed_patient.First_Name;
   this.lastName = this.existed_patient.Last_Name;
   this.phoneNumber = this.existed_patient.Phone_Number;
   this.password = this.existed_patient.Password;
   this.email = this.existed_patient.Email;
   this.gender = this.existed_patient.Gender;
   this.dob = this.existed_patient.Date_of_Birth;

   
  }


  update=()=>{
  if (this.file=='') {
    this.picture=this.existed_patient.Image
  }else{
  this.picture=this.myImage
  }
  let updatedPatient={"Surname":this.surname,"First_Name":this.firstName, "Last_Name":this.lastName, "Phone_Number":this.phoneNumber, "Email":this.email, "Gender":this.gender, "Image":this.picture, "Date_of_Birth":this.dob, "Password":this.password}

this.regPatients[this.id]=updatedPatient
console.log(this.regPatients);
  
localStorage.setItem('registeredPatients', JSON.stringify(this.regPatients))

  this.surname='';
  this.firstName='';
  this.lastName='';
  this.phoneNumber='';
  this.password='';
  this.email='';
  this.gender='';
  this.dob='';
  this.file='';
  this.dialogRef.close()
  location.reload()
  }

  back=()=>{
  this.dialogRef.close()
  }

}
