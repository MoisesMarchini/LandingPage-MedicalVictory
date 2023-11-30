import { Component } from '@angular/core';
import { SectionModel } from 'src/app/shared/components/section/section.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  sectionModel: SectionModel = {
    sectionName: 'Eventos em que participamos',
    title: 'Nossas Participações',
    description: "Estes são alguns dos eventos e momentos em que estivemos presentes ou participamos."
  }
  slides = [
    {
      bgPath: 'https://oinstitutoneurodiversidade.com.br/wp-content/uploads/2022/09/1-editada.jpg',
      title: 'Capacitação sobre Autismo',
      body: 'Para servidores da Secretaria Municipal de Assistência Social de Queimados'
    },
    {
      bgPath: 'https://oinstitutoneurodiversidade.com.br/wp-content/uploads/2022/09/2-editada.jpg',
      title: 'Capacitação sobre Autismo',
      body: 'Para servidores da Secretaria Municipal de Assistência Social de Queimados'
    },
    {
      bgPath: 'https://oinstitutoneurodiversidade.com.br/wp-content/uploads/2022/09/3-editada.jpg',
      title: 'Capacitação sobre Autismo',
      body: 'Para servidores da Secretaria Municipal de Assistência Social de Queimados'
    },
    {
      bgPath: 'https://oinstitutoneurodiversidade.com.br/wp-content/uploads/2022/09/4-editada.jpg',
      title: 'Matéria do Jornal Extra',
      body: 'Matéria sobre o instituto após inaugurarmos nossa segunda unidade em São João de Meriti'
    },
    {
      bgPath: 'https://oinstitutoneurodiversidade.com.br/wp-content/uploads/2023/02/7-editada.jpg',
      title: 'Matéria do Jornal Extra',
      body: 'Matéria sobre o instituto após inaugurarmos nossa segunda unidade em São João de Meriti'
    },
    // {
    //   bgPath: 'https://oinstitutoneurodiversidade.com.br/wp-content/uploads/2023/02/7-editada.jpg',
    //   title: 'Matéria do Jornal Extra',
    //   body: 'Matéria sobre o instituto após inaugurarmos nossa segunda unidade em São João de Meriti'
    // },
  ]
}
