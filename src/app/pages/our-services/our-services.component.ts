import { Component } from '@angular/core';
import { PrimaryCard } from 'src/app/shared/components/primary-card/primary-card.component';
import { BigCard } from 'src/app/shared/components/service-big-card/service-big-card.component';
import { environment } from '../../../environments/environment';

@Component({
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {
  pageHeader = environment.sidePages.servicos;
  cards: BigCard[] = environment.ourServices.map(service => {
    return {
      title: service.name,
      body: service.description,
      bgImgPath: service.bgImgPath,
      fontawesomeIcon: service.fontawesomeIcon,
      active: false
    }
  }).map(service => this.mapCardIntoBigCard(service));

  private mapCardIntoBigCard(card: PrimaryCard): BigCard {
    return {
      bgPath: card.bgImgPath,
      title: card.title,
      body: card.body,
      externalLink: environment.departmentLinks.Queimados
    }
  }
}
