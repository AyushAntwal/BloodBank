import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
// import { Observable, count } from 'rxjs';
const path = 'path/to/data';
interface blood {
  group: string;
  count: number;
}
@Injectable()
export class BloodStock {
  public count: blood[] = [
    { group: 'O-', count: 12 },
    { group: 'O+', count: 18 },
    { group: 'A-', count: 5 },
    { group: 'A+', count: 15 },
    { group: 'B-', count: 9 },
    { group: 'B+', count: 13 },
    { group: 'AB-', count: 3 },
    { group: 'AB+', count: 8 },
  ];
  // constructor(private firestore: AngularFirestore) { }
    // addDoc(collection(this.firestore.firestore, 'bloodStock'), count)
    // .then(() => {
    //   console.log('Data uploaded successfully');
    // })
    // .catch(error => {
    //   console.error('Error uploading data:', error);
    // });
  

  //   public UploadStockToDatabase() {
  //     this.firestore
  //       .collection(path)
  //       .add(this.count)
  //       .then((res: any) => {
  //         console.log('DATA UPLODED', res);
  //       });
  //   }
}
