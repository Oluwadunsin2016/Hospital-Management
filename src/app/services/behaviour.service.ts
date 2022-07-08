import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourService {

  constructor() { }

  public data = new BehaviorSubject<any>({})
}
