import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-card',
  templateUrl: './primary-card.component.html',
  styleUrls: ['./primary-card.component.scss']
})
export class PrimaryCardComponent {
  @Input() card: PrimaryCard = {
    title: 'Painless procedures',
    active: false
  }
}

export interface PrimaryCard {
  iconPath?: string,
  title: string,
  body?: string,
  active: boolean
}
