import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private router: Router) {}

  
  name: string = '';
  email: string = '';
  reason: string = '';
  details: string = '';

  onSubmit() {
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Reason:', this.reason);
    console.log('Details:', this.details);

    this.router.navigateByUrl('/contact')
  }

}
