import { Injectable } from '@angular/core';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private persons: Person[] = [
    {
      fullName: 'Varaza Mishra',
      phoneNumber: '02228017752',
      address: 'Marve Road, Next To Maniratna, Malad (west)',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400064'
    },
    // Add more initial data here
  ];

  getPersons(): Person[] {
    return this.persons;
  }

  addPerson(person: Person): void {
    this.persons.push(person);
  }

  updatePerson(index: number, updatedPerson: Person): void {
    this.persons[index] = updatedPerson;
  }

  deletePerson(index: number): void {
    this.persons.splice(index, 1);
  }
}