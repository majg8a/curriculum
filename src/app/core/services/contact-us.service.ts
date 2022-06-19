import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  constructor(private angularFirestore: AngularFirestore) {
    
  }

  handleAddContactUs(contactUs: any) {
    return this.angularFirestore.collection('contactUs').add(contactUs);
  }
}
