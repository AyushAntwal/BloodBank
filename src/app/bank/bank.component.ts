import { Component } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css'],
})
export class BankComponent {
  items = [
    { name: 'Item 1', count: 5 },
    { name: 'Item 2', count: 3 },
    { name: 'Item 3', count: 7 },
  ];

  bucket: { name: string; count: number }[] = []; // Empty bucket initially

  onItemDropped(event: any) {
    // console.log(event);
    if (event.previousContainer === event.container) {
      console.log(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log();

      // const droppedItem = event.item.data;
      // droppedItem.count--;
    }

    // Remove the item from the items list if its count reaches 0
    // if (droppedItem.count === 0) {
    //   this.items = this.items.filter((item) => item !== droppedItem);
    // }
  }

  onBucketDropped(event: any) {
    // const droppedItem = event.item.data;
    // droppedItem.count++;
    // this.items.push(droppedItem);
    if (event.previousContainer !== event.container) {
      // console.log(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex
      // );
      console.log(this.items[event.previousIndex].name);
      if (
        !this.bucket
          .flatMap((l) => l.name)
          .includes(this.items[event.previousIndex].name)
      ) {
        this.bucket.push({
          name: this.items[event.previousIndex].name,
          count: 1,
        });
        console.log(this.bucket);
      }
    }
  }
}
