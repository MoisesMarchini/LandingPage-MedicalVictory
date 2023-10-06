import { Component } from '@angular/core';
import { PracticeAdiviceCard } from 'src/app/shared/components/practice-advice-card/practice-advice-card.component';

@Component({
  selector: 'app-practice-advice',
  templateUrl: './practice-advice.component.html',
  styleUrls: ['./practice-advice.component.scss']
})
export class PracticeAdviceComponent {
  cards: PracticeAdiviceCard[] = [
    {
      iconPath: '/assets/icons/painless-procedures.svg',
      title: 'Painless procedures',
      body: 'The gradual accumulation of information about ',
      active: false
    },
    {
      iconPath: '/assets/icons/online-appoinment.svg',
      title: 'Online Appoinment',
      body: 'The gradual accumulation of information about ',
      active: false
    },
    {
      iconPath: '/assets/icons/cancer-care.svg',
      title: 'Cancer Care',
      body: 'The gradual information about atomic behaviour...',
      active: true
    },
    {
      iconPath: '/assets/icons/book-now.svg',
      title: 'Book now',
      body: 'The gradual accumulation of information about ',
      active: false
    },
  ]
}
