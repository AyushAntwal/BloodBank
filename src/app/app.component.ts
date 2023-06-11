import { Component } from '@angular/core';
import { Blood, BloodStock } from './BloodStock';

import { inject } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { doc, getDocs, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { StoreComponent } from './store/store.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bloodStore';
  collectionId: string = '';
  firestore: Firestore = inject(Firestore);
  // constructor(public BloodStock: BloodStock) {
  //   BloodStock.updataData([
  //     { group: 'O-', count: 12 },
  //     { group: 'O+', count: 18 },
  //     { group: 'A-', count: 5 },
  //     { group: 'A+', count: 15 },
  //     { group: 'B-', count: 9 },
  //     { group: 'B+', count: 13 },
  //     { group: 'AB-', count: 3 },
  //     { group: 'AB+', count: 8 },
  //   ]);
  // }

  constructor(public bloodStock: BloodStock) {
    const itemCollection = collection(this.firestore, 'bloodStore');
    getDocs(itemCollection)
      .then((querySnapshot: any) => {
        const updatedData = querySnapshot.docs.map((doc: any) => {
          this.collectionId = doc.id;
          return doc.data().stock as Blood;
        });
        this.bloodStock.updateData(updatedData[0]);
        // console.log(updatedData);
        // console.log(this.collectionId);
      })
      .catch((error: any) => {
        console.error('Error getting documents: ', error);
      });

    bloodStock.updateEvent.subscribe((data: any) => {
      updateDoc(doc(this.firestore, 'bloodStore', this.collectionId), {
        stock: data,
      })
        .then(() => {
          console.log('HERE IS DATA UPDATED');
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}
