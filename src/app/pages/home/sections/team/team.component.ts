import { Component } from '@angular/core';
import { SectionModel } from 'src/app/shared/components/section/section.component';
import { TeamCard } from 'src/app/shared/components/team-card/team-card.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  sectionModel: SectionModel = {
    title: 'Our Team',
    sectionName: 'Team',
    description: "Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics"
  }
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
