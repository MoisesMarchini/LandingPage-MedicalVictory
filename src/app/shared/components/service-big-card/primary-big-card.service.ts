import { Injectable } from '@angular/core';
import { BigCard } from './service-big-card.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrimaryBigCardService {
  private card?: BigCard;
  private cardSubject = new BehaviorSubject<BigCard | undefined>(this.card);
  $card = this.cardSubject.asObservable();

  constructor() { }

  show(model: BigCard) {
    this.cardSubject.next(model);
  }

  close() {
    this.cardSubject.next(undefined);
  }
}
