import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public go: Router, public user: UserService) {}

  public email = '';
  public password = '';
  public filtered: any = '';
  public Id=''

  ngOnInit(): void {}

  logIn = () => {
    let recovered = JSON.parse(localStorage.getItem('registeredPatients'));
    console.log(recovered);

    this.filtered = recovered.find(
      (existing: any) =>
        existing.Email == this.email && existing.Password == this.password
    );
    this.Id = recovered.findIndex(
      (existing: any) =>
        existing.Email == this.email && existing.Password == this.password
    );
console.log(this.Id);

    console.log(this.filtered);

    if (this.filtered) {
      let status = true;
      localStorage.setItem('Status', JSON.stringify(status));
      localStorage.setItem('currentPatientId', JSON.stringify(this.Id));
      this.go.navigate(['/home']);
      location.href = '';
    } else {
      return alert('Incorrect Credentials');
    }
  };
}
