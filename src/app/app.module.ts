import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { BankComponent } from './bank/bank.component';
import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [AppComponent, StoreComponent, BankComponent],
  imports: [BrowserModule, DragDropModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
