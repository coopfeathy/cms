import { Component } from '@angular/core';
import { Contact } from '../../contact.model'; 

@Component({
  selector: 'cms-contact-list',
  standalone: true,
  imports: [],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'] // Note: it's 'styleUrls' not 'styleUrl'
})
export class ContactListComponent {
  contacts: Contact[] = [
    new Contact(
      '1', 
      'R. Kent Jackson', 
      'jacksonk@byui.edu', 
      '208-496-3771', 
      'assets/images/jacksonk.jpg', 
      null
    ),
    new Contact(
      '2', 
      'Rex Barzee', 
      'barzeer@byui.edu', 
      '208-496-3768', 
      'assets/images/barzeer.jpg', 
      null
    )
  ];
}

