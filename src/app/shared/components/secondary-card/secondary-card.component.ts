import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-card',
  templateUrl: './secondary-card.component.html',
  styleUrls: ['./secondary-card.component.scss']
})
export class SecondaryCardComponent {
  @Input() model: SecondaryCard = {
    bgPath: '',
    title: '',
    body: '',
  }

}
export interface SecondaryCard {
  bgPath: string,
  title: string,
  body: string
}
