import { Component, OnInit } from '@angular/core';
import { PrimaryCard } from 'src/app/shared/components/primary-card/primary-card.component';
import { SectionModel } from 'src/app/shared/components/section/section.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  socialMediaLinks = environment.socialMediaLinks;
  sectionModel: SectionModel = {
    title: 'Nossos Serviços',
    sectionName: 'Cuidados Médicos especializados',
    description: "Explore nossa variedade de serviços especializados, desde atendimento pediátrico até terapias ocupacionais e psicológicas, para cuidados personalizados e abrangentes. Encontre a solução ideal para suas necessidades de saúde e bem-estar."
  }
  cards: PrimaryCard[] = [];
  medicalServiceNames = [
    {
      name: "Odontopediatria",
      description: "Cuidados odontológicos especializados para crianças."
    },
    {
      name: "Pediatria",
      description: "Atendimento médico especializado para crianças e adolescentes."
    },
    {
      name: "Nutrição",
      description: "Avaliação e orientação nutricional para saúde e bem-estar."
    },
    {
      name: "Neuropediatria",
      description: "Diagnóstico e tratamento de distúrbios neurológicos em crianças."
    },
    {
      name: "Psiquiatria",
      description: "Avaliação e tratamento de problemas de saúde mental."
    },
    {
      name: "Avaliação Neuropsicológica",
      description: "Avaliação para entender o funcionamento cognitivo e emocional."
    },
    {
      name: "Fisioterapia",
      description: "Reabilitação física para lesões e problemas musculares."
    },
    {
      name: "Atividades Físicas",
      description: "Programas de exercícios personalizados para saúde e condicionamento."
    },
    {
      name: "Psicopedagogia",
      description: "Intervenções para dificuldades de aprendizagem e desenvolvimento."
    },
    {
      name: "Terapia Ocupacional",
      description: "Treinamento e orientação para melhorar habilidades funcionais e sociais."
    },
    {
      name: "Psicologia Infantil",
      description: "Apoio psicológico e orientação para crianças e suas famílias."
    },
    {
      name: "Fonoaudiologia",
      description: "Avaliação e tratamento de problemas de comunicação e linguagem."
    }
  ]

  ngOnInit() {
    this.cards = this.medicalServiceNames.map(service => {
      return {
        title: service.name,
        body: '',
        // body: service.description,
        active: false
      }
    });
  }
}
