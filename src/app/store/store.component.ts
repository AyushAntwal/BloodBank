import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BloodStock } from '../BloodStock';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  bloodStock: any[] = [];
  constructor(public BloodStock: BloodStock, private formBuilder: FormBuilder) {
    this.bloodStock = BloodStock.count;
  }
  bloodStockForm: FormGroup = new FormGroup({});
  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    const formControlsConfig: any = {};

    for (const bloodGroup of this.bloodStock) {
      formControlsConfig[bloodGroup.group] = [
        bloodGroup.count,
        Validators.required,
      ];
    }

    this.bloodStockForm = this.formBuilder.group(formControlsConfig);
  }

  onSubmit() {
    let value: any = this.bloodStockForm.value;
    let updateStock = this.bloodStock.map((l) => ({
      group: l.group,
      count: value[l.group],
    }));
    console.log(updateStock);
    // Handle form submission and update the blood stock data
    // You can access the updated counts using this.bloodStockForm.value
  }
}
