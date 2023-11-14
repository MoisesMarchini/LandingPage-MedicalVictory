import { Component } from '@angular/core';
import { TeamCard } from 'src/app/shared/components/team-card/team-card.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  cards: TeamCard[] =[
    {
      coverPath: 'user-cover-1.png',
      title: 'Julian Jameson',
      subtitle: 'Profession'
    },
    {
      coverPath: 'user-cover-2.png',
      title: 'Julian Jameson',
      subtitle: 'Profession'
    },
    {
      coverPath: 'user-cover-3.png',
      title: 'Julian Jameson',
      subtitle: 'Profession'
    },
    {
      coverPath: 'user-cover-4.png',
      title: 'Julian Jameson',
      subtitle: 'Profession'
    },
  ]
}
