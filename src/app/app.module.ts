import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { BankComponent } from './bank/bank.component';
import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';
import { BloodStock } from './BloodStock';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

// if (firebaseApps.length === 0) {
//   // Initialize the Firebase app
//   provideFirebaseApp(() => initializeApp(environment.firebaseConfig));
// }
@NgModule({
  declarations: [AppComponent, StoreComponent, BankComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DragDropModule,
    AppRoutingModule,
  ],
  providers: [BloodStock],
  bootstrap: [AppComponent],
})
export class AppModule {}
