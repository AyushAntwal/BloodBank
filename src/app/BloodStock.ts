import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export interface Blood {
  group: string;
  count: number;
}

@Injectable({
  providedIn: 'root',
})
export class BloodStock {
  updateEvent: EventEmitter<any> = new EventEmitter<any>();
  public count: BehaviorSubject<Blood[]> = new BehaviorSubject<Blood[]>([]);

  public updateData(data: Blood[]) {
    this.count.next(data);
  }
  getData(): Observable<Blood[]> {
    return this.count.asObservable();
  }
  public uploadData(data: Blood[]) {
    this.count.next(data);
    this.updateEvent.emit(data);
  }
}
