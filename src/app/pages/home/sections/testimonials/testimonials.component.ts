import { Component } from '@angular/core';
import { SectionModel } from 'src/app/shared/components/section/section.component';
import { TestimonialCard } from 'src/app/shared/components/testimonial-card/testimonial-card.component';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  sectionModel: SectionModel = {
    title: 'Histórias que Inspiram',
    sectionName: 'Depoimentos e Avaliações',
    description: "Conheça algumas experiências reais e transformadoras de famílias e crianças que encontraram apoio e evolução com nossos serviços."
  }
  cards: TestimonialCard[] = [
    {
      title: 'Fernanda Silveira',
      body: "Excelente! A equipe maravilhosa, o espaço acolhedor. Ótimo lugar pra atender as necessidades do meu pequeno ♥️",
      review: 5,
      coverPath: 'testimonial-user-cover-1.png'
    },
    {
      title: 'Amanda Figueiredo',
      body: "Lugar maravilhoso, excelente atendimento de todos os profissionais, lugar acolhedor, que faz a criança se sentir em casa. Minha filha ama a tia Marcia pisicopedagoga e a tia suzane fono. Estou muito feliz de ver minha filha evoluir, vejo que estou no lugar certo!  Não posso deixar de falar das atendentes, todas maravilhosas. Andreia, Mari, Flávia e Tati.",
      review: 5,
    },
    {
      title: 'Ronaldo Andrade',
      body: "Oferece ótimo acolhimento para as crianças e família.Profissionais dedicados que promovem um ótimo trabalho com respeito e carinho. Só tenho agradecer pela atenção e o progresso que minha filha  está obtendo.Obrigado a todos.",
      review: 5,
    },
    {
      title: 'Juliana Gama de Souza',
      body: "É a melhor clínica que já levei meu filho. A fono e muito acolhedora atendimento simplesmente maravilhoso as atendentes são maravilhosas sempre somos recebidos com muito amor carinho e sempre estão sorrindo e dão muita atenção aos pequenos. Não tenho dúvidas que me filho ama a clínica mas completa e maravilhosa que já vi parabéns a todos.",
      review: 5,
      coverPath: 'testimonial-user-cover-2.png'
    },
    {
      title: 'Jessica Andrade',
      body: "Atendimento excelente, da recepção aos terapeutas,todo bem simpáticos e educados.<br>Mais que uma clinica uma família<br>Na qual estou muito satisfeita e feliz em fazer parte. Deus abençoe cada de vcs!!!",
      review: 5,
    },
    {}
    // {
    //   title: 'Danielle Ferreira',
    //   body: "Instituto incrível,com grande empatia desde a secretaria até os antendimentos com os terapeutas. cafezinho de primeira rs fono Suzane linda e incrível trabalha com meus gêmeos e o resultado no desenvolvimento na fala é nítido , nada a reclamar só agradecer.",
    //   review: 5,
    // },
    // {
    //   title: 'Viviane Cristina',
    //   body: "O Instituto neurodiversidade de Queimados está de parabéns qt ao acolhimento e atendimento das tias,meu  filho Davi Lucas ama ir ao Instituto!",
    //   review: 5,
    // },
  ]
  mobileCards = this.cards.slice(0, this.cards.length - 1);
}
