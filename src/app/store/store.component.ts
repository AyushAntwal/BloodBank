import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blood, BloodStock } from '../BloodStock';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  bloodStock: Blood[] = [];
  bloodStockForm: FormGroup = new FormGroup({});
  constructor(public BloodStock: BloodStock, private formBuilder: FormBuilder) {
    this.bloodStockForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.buildForm();
    this.BloodStock.getData().subscribe((data) => {
      // console.log(data);
      this.bloodStock = data;
    });
  }
  buildForm() {
    const formControlsConfig: any = {};
    for (const bloodGroup of this.bloodStock) {
      formControlsConfig[bloodGroup.group] = [bloodGroup.count];
    }
    this.bloodStockForm = this.formBuilder.group(formControlsConfig);
  }

  handelChange(event: any, data: any) {
    let index = this.bloodStock.findIndex((l) => l === data);
    this.bloodStock[index].count = event.target.value;
  }

  onSubmit() {
    this.buildForm();
    let value: any = this.bloodStockForm.value;
    let updateStock = this.bloodStock.map((l) => ({
      group: l.group,
      count: value[l.group],
    }));
    console.log(value);
    this.BloodStock.uploadData(updateStock);
  }
}
