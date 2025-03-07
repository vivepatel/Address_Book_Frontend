import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonAddressFormComponent } from './person-address-form/person-address-form.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: 'details', component: PersonDetailsComponent },
      { path: 'form/:id', component: PersonAddressFormComponent }, // Route for editing
      { path: 'form', component: PersonAddressFormComponent }, // Route for adding
      { path: '', redirectTo: '/details', pathMatch: 'full' }
    ])
  ]
};