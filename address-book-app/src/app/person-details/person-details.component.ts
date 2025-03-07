import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for *ngFor
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  persons: Person[] = [];

  constructor(
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }

  navigateToAddContact(): void {
    this.router.navigate(['/form']);
  }

  editPerson(index: number): void {
    this.router.navigate(['/form', { id: index }]); // Navigate to form with index
  }

  deletePerson(index: number): void {
    this.personService.deletePerson(index); // Delete the person
    this.persons = this.personService.getPersons(); // Refresh the list
  }
}