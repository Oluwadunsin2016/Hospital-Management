import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-medical-information',
  templateUrl: './medical-information.component.html',
  styleUrls: ['./medical-information.component.css'],
})
export class MedicalInformationComponent implements OnInit {
  public geno = '';
  public bgroup = '';
  public pcv = '';
  public bp = '';
  public hiv = '';
  public ray = '';
  public hepa = '';
  public weight = '';
  public currentPatient: any = '';
  public regPatients: any = '';
  public editmode: any = '';

  public Id: any = '';

  constructor(public dialogRef: MatDialogRef<MedicalInformationComponent>) {}

  ngOnInit(): void {
    this.Id = JSON.parse(localStorage.getItem('patientId'));
    this.editmode = JSON.parse(localStorage.getItem('editMode'));
    this.regPatients = JSON.parse(localStorage.getItem('registeredPatients'));
    this.currentPatient = this.regPatients.find(
      (val: any, id: any) => id == this.Id
    );

    if (this.editmode == true) {
      this.geno = this.currentPatient.Genotype;
      this.bgroup = this.currentPatient.Blood_Group;
      this.pcv = this.currentPatient.PCV;
      this.bp = this.currentPatient.Blood_Presure;
      this.hiv = this.currentPatient.HIV;
      this.ray = this.currentPatient.X_ray;
      this.hepa = this.currentPatient.Hepatitis;
      this.weight = this.currentPatient.Weight;
    } else {
      this.geno = '';
      this.bgroup = '';
      this.pcv = '';
      this.bp = '';
      this.hiv = '';
      this.ray = '';
      this.hepa = '';
      this.weight = '';
    }
  }

  update = () => {
    if (this.editmode == true) {
      this.currentPatient.Genotype = this.geno;
      this.currentPatient.Blood_Group = this.bgroup;
      this.currentPatient.PCV = this.pcv;
      this.currentPatient.Blood_Presure = this.bp;
      this.currentPatient.HIV = this.hiv;
      this.currentPatient.X_ray = this.ray;
      this.currentPatient.Hepatitis = this.hepa;
      this.currentPatient.Weight = this.weight;

      this.regPatients[this.Id]=this.currentPatient;
      
    } else {
      let medDetails = {
        Genotype: this.geno,
        Blood_Group: this.bgroup,
        PCV: this.pcv,
        Blood_Presure: this.bp,
        HIV: this.hiv,
        X_ray: this.ray,
        Hepatitis: this.hepa,
        Weight: this.weight,
      };
      let fullDetails = Object.assign(this.currentPatient, medDetails);
      // let fullDetails = [this.currentPatient, medDetails];
      console.log(fullDetails);
      this.regPatients[this.Id] = fullDetails;
      // localStorage.setItem(
      //   'registeredPatients',
      //   JSON.stringify(this.regPatients)
      // );
      // this.dialogRef.close();
      // location.reload();
    }
     localStorage.setItem(
        'registeredPatients',
        JSON.stringify(this.regPatients)
      );
      this.dialogRef.close();
      location.reload();
  };

  back = () => {
    this.dialogRef.close();
  };
}
