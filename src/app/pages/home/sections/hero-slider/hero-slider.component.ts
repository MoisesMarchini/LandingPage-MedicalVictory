import { Component } from '@angular/core';
import { getHeaderNavHeight } from '../../../../shared/helpers/functions';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent {
  slides = [
    {
      backgroundImg: '/assets/sections/header/background.jpg',
      title: "Instituto <br>Neurodiversidade",
      subtitle: "Referência em Autismo, TDAH e Terapias Multidisciplinares",
      body: "Saiba mais sobre nossos serviços e unidades."
    },
    {
      backgroundImg: 'https://oinstitutoneurodiversidade.com.br/wp-content/uploads/2022/10/fundo-3-edit-33-1.jpg',
      title: "Vista <br>Neurodiversidade",
      subtitle: "Inclusão para onde você for!",
      body: "Conheça nossa linha de produtos e apoie a causa."
    },
    {
      backgroundImg: 'https://oinstitutoneurodiversidade.com.br/wp-content/uploads/2022/10/Arte-15-2Prancheta-1.jpg',
      title: "Imersão sobre autismo",
      subtitle: "Para Pais e Profissionais do Rio de Janeiro",
      body: "Descubra mais sobre nossos cursos e capacitações.",
      video: {
        src: `https://www.youtube.com/embed/w7IfVbUFZOA`,
        title: 'Video Chamada - 1ª Imersão sobre Autismo do Rio de Janeiro',
        isPlaying: false
      }
    }
  ]

  getHeaderNavHeight = () => getHeaderNavHeight();
}
