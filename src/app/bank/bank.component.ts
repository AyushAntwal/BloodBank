import { Component, OnInit } from '@angular/core';
import { Blood, BloodStock } from '../BloodStock';
import { FormBuilder, FormGroup } from '@angular/forms';
interface Request {
  group: string;
  count: number;
}
interface DonateList {
  [key: string]: string[];
}
@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css'],
})
export class BankComponent implements OnInit {
  bloodStock!: Blood[];
  bucket: Blood[] = [];
  isDataLoaded = false;
  showPurchaseDetails: Boolean = false;
  bloodReqForm: FormGroup = new FormGroup({});
  reqest: Request = { group: '', count: 0 };

  constructor(
    public BloodStock: BloodStock,
    private formmBuilder: FormBuilder
  ) {
    this.bloodReqForm = this.formmBuilder.group({});
  }

  ngOnInit(): void {
    this.BloodStock.getData().subscribe((data) => {
      // console.log(data);
      this.bloodStock = data;
      this.isDataLoaded = true;
    });
  }
  donateList: DonateList = {
    'O-': [],
    'O+': ['O+', 'A+', 'B+', 'AB+'],
    'A-': ['A+', 'A-', 'AB+', 'AB-'],
    'A+': ['A+', 'AB+'],
    'B-': ['B+', 'B-', 'AB+', 'AB-'],
    'B+': ['B+', 'AB+'],
    'AB-': ['AB+', 'AB-'],
    'AB+': ['AB+'],
  };
  // Empty bucket initially

  onItemDropped(event: any) {
    console.log(this.bucket[event.previousIndex].count);
    let index = this.bloodStock.findIndex(
      (value) => value.group === this.bucket[event.previousIndex].group
    );
    this.bloodStock[index].count += this.bucket[event.previousIndex].count;
    this.bucket = this.bucket.filter((l, i) => i !== event.previousIndex);
    if (this.bucket.length) {
      this.showPurchaseDetails = true;
    } else {
      this.showPurchaseDetails = false;
    }
  }

  onBucketDropped(event: any) {
    if (event.previousContainer !== event.container) {
      // console.log(this.bloodStock[event.previousIndex].group);
      // console.log(this.bucketBloodCount(), this.reqest.count);
      if (!this.reqest.count) {
        alert('Please fill the blood Amount required.');
        return;
      }
      if (this.bucketBloodCount() === this.reqest.count) {
        alert('Blood Requirement is Fullfilled..');
        return;
      }
      if (
        !this.bucket
          .flatMap((l) => l.group)
          .includes(this.bloodStock[event.previousIndex].group)
      ) {
        this.bucket.push({
          group: this.bloodStock[event.previousIndex].group,
          count: 1,
        });
      } else {
        let index = this.bucket.findIndex(
          (value) => value.group === this.bloodStock[event.previousIndex].group
        );
        this.bucket[index].count += 1;
      }
      this.bloodStock[event.previousIndex].count -= 1;
    }
    if (this.bucket.length) {
      this.showPurchaseDetails = true;
    } else {
      this.showPurchaseDetails = false;
    }
  }

  onBloodGroupChange(event: any) {
    if (!this.bucket.length) {
      this.reqest.group = event.target.value;
    } else {
      alert('You have to Empty the bucket before changing the blood Group.');
    }
  }
  onBloodCountChange(event: any) {
    this.reqest.count = Number(event.target.value);
  }

  checkDragable(group: string) {
    return !this.donateList[this.reqest.group]?.includes(group);
  }

  bucketBloodCount(): number {
    let count: number = 0;
    this.bucket.map((l) => (count += l.count));
    return count;
  }
  show(item: any) {
    console.log(item);
  }

  onSubmit() {
    this.BloodStock.uploadData(this.bloodStock);
    // console.log(this.bucket);
  }

  updatePurchase() {
    this.bucket = [];
    this.bloodReqForm.reset(this.reqest);
    this.reqest = { group: '', count: 0 };
  }
}

// console.log(
//   event.previousContainer.data,
//   event.container.data,
//   event.previousIndex,
//   event.currentIndex
// );
