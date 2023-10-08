import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent {
  rootCoverPath = '/assets/sections/team/'
  @Input() card: TeamCard = {
    coverPath: '',
    title: '',
    subtitle: '',
  }
  socialMediaIcons = {
      'Facebook': '/assets/icons/facebook.svg',
      'Instagram': '/assets/icons/instagram.svg',
      'Twitter': '/assets/icons/twitter.svg',
    }
}

export interface TeamCard {
  coverPath: string,
  title: string,
  subtitle: string
}
