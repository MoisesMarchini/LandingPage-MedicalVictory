import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-practice-advice-card',
  templateUrl: './practice-advice-card.component.html',
  styleUrls: ['./practice-advice-card.component.scss']
})
export class PracticeAdviceCardComponent {
  @Input() card: PracticeAdiviceCard = {
    iconPath: '/assets/icons/painless-procedures.svg',
    title: 'Painless procedures',
    body: 'The gradual accumulation of information about ',
    active: false
  }
}

export interface PracticeAdiviceCard {
  iconPath: string,
  title: string,
  body: string,
  active: boolean
}
