import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { BankComponent } from './bank/bank.component';

const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: '', component: BankComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
