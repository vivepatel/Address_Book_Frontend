import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-address-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import FormsModule for form handling
  templateUrl: './person-address-form.component.html',
  styleUrls: ['./person-address-form.component.css']
})
export class PersonAddressFormComponent implements OnInit {
  person: Person = {
    fullName: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  };

  isEditMode = false;
  editIndex: number | null = null;

  constructor(
    private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.editIndex = +params['id'];
        const personToEdit = this.personService.getPersons()[this.editIndex];
        if (personToEdit) {
          this.person = { ...personToEdit }; // Pre-fill the form with person data
        }
      }
    });
  }

  onSubmit(): void {
    if (this.isEditMode && this.editIndex !== null) {
      this.personService.updatePerson(this.editIndex, this.person); // Update the person
    } else {
      this.personService.addPerson(this.person); // Add a new person
    }
    this.router.navigate(['/details']); // Navigate back to the details page
  }

  onReset(): void {
    this.person = {
      fullName: '',
      phoneNumber: '',
      address: '',
      city: '',
      state: '',
      zipCode: ''
    };
  }

  navigateToDetails(): void {
    this.router.navigate(['/details']);
  }
}