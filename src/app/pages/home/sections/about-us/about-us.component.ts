import { Component } from '@angular/core';
import { SectionModel } from 'src/app/shared/components/section/section.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  coverImg = '/assets/sections/about/section-cover.jpeg';
  sectionModel: SectionModel = {
    title: 'Sobre Nós',
    sectionName: 'Quem somos',
    // description: 'Referência em Autismo, TDAH, Deficiências e Terapias Multidisciplinares.'
  }
}
