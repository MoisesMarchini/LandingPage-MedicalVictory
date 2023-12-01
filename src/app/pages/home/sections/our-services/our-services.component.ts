import { Component, OnInit } from '@angular/core';
import { PrimaryCard } from 'src/app/shared/components/primary-card/primary-card.component';
import { SectionModel } from 'src/app/shared/components/section/section.component';
import { environment } from 'src/environments/environment';
import { PrimaryBigCardService } from '../../../../shared/components/service-big-card/primary-big-card.service';
import { BigCard } from '../../../../shared/components/service-big-card/service-big-card.component';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  departmentLinks = environment.departmentLinks;
  socialMediaLinks = environment.socialMediaLinks;
  ourServices = environment.ourServices;
  sectionModel: SectionModel = {
    title: 'Nossos Serviços',
    sectionName: 'Cuidados Médicos especializados',
    description: "Explore nossa variedade de serviços especializados, desde atendimento pediátrico até terapias ocupacionais e psicológicas, para cuidados personalizados e abrangentes. Encontre a solução ideal para suas necessidades de saúde e bem-estar."
  }
  cards: PrimaryCard[] = [];

  constructor(private primaryBigCardService: PrimaryBigCardService){}

  ngOnInit() {
    this.cards = this.ourServices.map(service => {
      return {
        title: service.name,
        body: service.description,
        bgImgPath: service.bgImgPath,
        fontawesomeIcon: service.fontawesomeIcon,
        active: false
      }
    });
  }

  showBigCard(card: PrimaryCard) {
    this.primaryBigCardService.show(this.mapCardIntoBigCard(card));
  }

  private mapCardIntoBigCard(card: PrimaryCard): BigCard {
    return {
      bgPath: card.bgImgPath,
      title: card.title,
      body: card.body,
      externalLink: this.departmentLinks.Queimados
    }
  }
}
