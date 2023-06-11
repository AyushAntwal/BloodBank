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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent, StoreComponent, BankComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DragDropModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [BloodStock],
  bootstrap: [AppComponent],
})
export class AppModule {}
