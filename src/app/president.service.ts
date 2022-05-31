import { Injectable } from '@angular/core';
import { President } from './president';
//in order to ask for the class we just add it to the constructor
//of the components and we have to label it private, public, protected
//you can not leave the access modifier blank
@Injectable({
  providedIn: 'root'
})
export class PresidentService {
  currentPresident? : President;
  constructor() { }

  setCurrentPresident(president: President): void{
    this.currentPresident = president;
  }

  getCurrentPresident(): President | undefined{
    return this.currentPresident;
  }

  getWhatever(): String {
    return 'whatever';
  }
}
