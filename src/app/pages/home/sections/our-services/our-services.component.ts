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
  sectionModel: SectionModel = {
    title: 'Nossos Serviços',
    sectionName: 'Cuidados Médicos especializados',
    description: "Explore nossa variedade de serviços especializados, desde atendimento pediátrico até terapias ocupacionais e psicológicas, para cuidados personalizados e abrangentes. Encontre a solução ideal para suas necessidades de saúde e bem-estar."
  }
  cards: PrimaryCard[] = [];
  medicalServiceNames = [
    {
      name: "Odontopediatria",
      description: "A odontopediatria é uma subárea da odontologia focada nos cuidados da saúde bucal de bebês, crianças e adolescentes. Seu principal objetivo é promover a conscientização sobre a importância de estabelecer hábitos saudáveis desde cedo, visando sua manutenção ao longo da vida. <br>Iniciar uma rotina de consultas odontopediátricas precocemente estabelece um vínculo de confiança entre pais, filhos e o profissional de saúde bucal. Nesse contexto, a ênfase é na prevenção, pois quanto mais cedo se inicia, melhores são os resultados. Por isso, futuras mães podem receber orientações durante a gestação sobre os cuidados iniciais com o bebê, destacando a importância desse acompanhamento desde os primeiros momentos.",
      bgImgPath: 'https://oinstitutoneurodiversidade.com.br/wp-content/webp-express/webp-images/uploads/2022/10/Odontopediatria.jpg.webp',
      fontawesomeIcon: 'fa-solid fa-tooth',
    },
    {
      name: "Neuropediatria",
      description: "A Neuropediatria, um ramo da neurologia, concentra-se no estudo das doenças relacionadas ao desenvolvimento e amadurecimento do sistema nervoso, desempenhando um papel crucial no controle de condições neurológicas. Além do tratamento, os profissionais dessa área se dedicam ao acompanhamento e à prevenção de uma variedade de problemas que possam afetar o saudável desenvolvimento físico, mental e emocional das crianças. Sua atuação inicia-se nos primeiros estágios do desenvolvimento, desde o período neonatal, oferecendo cuidados especiais para condições como Epilepsia, Paralisia Cerebral, dores de cabeça e transtornos como Deficiência Intelectual, Transtorno do Espectro Autista, distúrbios de aprendizagem e Transtorno do Déficit de Atenção e Hiperatividade.",
      bgImgPath: 'https://oinstitutoneurodiversidade.com.br/wp-content/webp-express/webp-images/uploads/2022/10/neuropediatria.jpg.webp',
      fontawesomeIcon: 'fa-solid fa-brain',
    },
    {
      name: "Pediatria",
      description: "O papel do pediatra na identificação precoce do autismo é crucial, uma vez que eles são os profissionais responsáveis pelo acompanhamento das crianças desde os primeiros dias de vida. Ao identificar precocemente sinais que possam sugerir o Transtorno do Espectro Autista (TEA), o pediatra pode iniciar rapidamente a estimulação, o que pode resultar em ganhos mais efetivos no desenvolvimento neuropsicomotor da criança.",
      bgImgPath: 'https://oinstitutoneurodiversidade.com.br/wp-content/webp-express/webp-images/uploads/2022/11/Pediatria-.png.webp',
      fontawesomeIcon: 'fa-solid fa-child-reaching',
    },
    {
      name: "Nutrição",
      description: "Crianças com autismo enfrentam riscos adicionais de problemas nutricionais, como deficiências de nutrientes, alergias e intolerâncias alimentares. Gerenciar a alimentação de uma criança com autismo pode ser desafiador, exigindo atenção especial. É fundamental contar com a orientação de um nutricionista desde cedo, possibilitando a elaboração de um plano alimentar balanceado e nutritivo. Destaca-se que uma alimentação adequada não apenas contribui para o crescimento, mas também influencia o aprendizado, fortalece o sistema imunológico e previne doenças. É importante ressaltar que não há uma dieta universal para autistas, sendo essencial a individualização do plano alimentar de acordo com as necessidades específicas de cada criança.",
      bgImgPath: 'https://oinstitutoneurodiversidade.com.br/wp-content/webp-express/webp-images/uploads/2022/10/nutricao-1024x731.jpg.webp',
      fontawesomeIcon: 'fa-solid fa-apple-whole',
    },
    {
      name: "Avaliação Neuropsicológica",
      description: "O exame envolve uma série de procedimentos complexos, como testes neurológicos e psicológicos específicos, anamnese médica por meio de entrevistas detalhadas com o paciente e familiares, e observação clínica. A partir dos dados coletados, é elaborado um relatório abrangente do perfil neuropsicológico do paciente, possibilitando identificar possíveis anormalidades e determinar seu estágio de desenvolvimento, além de indicar a necessidade de encaminhamento a um especialista. Esse exame é frequentemente solicitado por profissionais como psiquiatras, neurologistas e geriatras, a fim de auxiliar no diagnóstico e direcionar o tratamento mais apropriado, que pode incluir medicamentos, terapia, reabilitação ou outras intervenções.",
      bgImgPath: 'https://oinstitutoneurodiversidade.com.br/wp-content/webp-express/webp-images/uploads/2022/10/avaliacao-neuropsicologico.jpg.webp',
      fontawesomeIcon: 'fa-solid fa-brain',
    },
    {
      name: "Fisioterapia",
      description: "O Transtorno do Espectro Autista (TEA) representa um distúrbio do neurodesenvolvimento que pode impactar a comunicação, tanto verbal quanto não verbal, incluindo a manifestação de movimentos repetitivos e períodos de isolamento da realidade. Portanto, é de suma importância a integração precoce da fisioterapia no tratamento, visando aprimorar as habilidades necessárias para atividades cotidianas, bem como promover o desenvolvimento da coordenação motora e a melhoria da interação interpessoal.",
      bgImgPath: 'https://oinstitutoneurodiversidade.com.br/wp-content/webp-express/webp-images/uploads/2022/10/fisioterapia.jpg.webp',
      fontawesomeIcon: 'fa-solid fa-stethoscope',
    },
    {
      name: "Atividades Físicas",
      description: "As atividades direcionadas às crianças autistas desempenham um papel crucial, pois facilitam a interação social delas com familiares, colegas e professores, lidando com uma das principais características do Transtorno do Espectro Autista, que é a dificuldade na comunicação. Além de trabalharem as dimensões socioemocionais, essas atividades são ferramentas essenciais para o desenvolvimento cognitivo, auxiliando na coordenação motora e na consciência fonológica.",
      bgImgPath: 'https://oinstitutoneurodiversidade.com.br/wp-content/webp-express/webp-images/uploads/2022/10/atividades-fisicas.jpg.webp',
      fontawesomeIcon: 'fa-solid fa-baseball-bat-ball',
    },
    {
      name: "Psiquiatria",
      description: "A Psiquiatria da Infância e Adolescência é uma especialidade que se dedica à saúde mental de crianças e adolescentes, diferenciando-se pela atenção específica a essa faixa etária. O psiquiatra especializado nesse campo não apenas avalia o estado de saúde mental do paciente, mas também considera o contexto em que está inserido, identificando não só os problemas, mas também os fatores protetores. Essa abordagem ampla contempla a saúde mental, o desenvolvimento biopsicossocial, a saúde física, a dinâmica familiar, a vida escolar e outros aspectos, visando compreender o indivíduo de forma holística.",
      bgImgPath: 'https://oinstitutoneurodiversidade.com.br/wp-content/webp-express/webp-images/uploads/2022/10/PSIQUIATRIA-INFANTIL-1024x683.jpg.webp',
      fontawesomeIcon: 'fa-solid fa-brain',
    },
    {
      name: "Psicopedagogia",
      description: "A Psicopedagogia é uma área especializada que combina os conhecimentos da Pedagogia e Psicologia, centrando-se nos processos mentais envolvidos na aprendizagem. Profissionais nesta área estão capacitados a auxiliar indivíduos com dificuldades de aprendizagem, independentemente da causa, inclusive em casos de distúrbios ou transtornos como TDAH ou TEA, visando criar um ambiente propício para o desenvolvimento educacional e cognitivo.",
      bgImgPath: 'https://oinstitutoneurodiversidade.com.br/wp-content/webp-express/webp-images/uploads/2022/10/psicopedagogia-e1664980294851-1024x941.jpg.webp',
      fontawesomeIcon: 'fa-solid fa-puzzle-piece',
    },
    {
      name: "Terapia Ocupacional",
      description: "A terapia ocupacional é uma prática que oferece benefícios a pessoas de todas as idades que enfrentam limitações ou incapacidades ao realizar atividades diárias. Ao examinar a rotina cotidiana, torna-se evidente que diferentes habilidades são exigidas, mesmo em tarefas aparentemente simples, como escovar os dentes ou vestir uma camisa, as quais podem ser desafiadoras devido a condições de saúde específicas. O terapeuta ocupacional é especializado em auxiliar os pacientes a superarem essas dificuldades, facilitando desde tarefas de autocuidado, como higiene, alimentação e vestuário, até a melhoria da produtividade no trabalho ou estudo. Além disso, busca promover o engajamento em atividades de lazer, como esportes, dança ou pintura, e facilita a participação em interações sociais.",
      bgImgPath: 'https://oinstitutoneurodiversidade.com.br/wp-content/webp-express/webp-images/uploads/2022/10/terapia-ocupacional.png.webp',
      fontawesomeIcon: 'fa-solid fa-shapes',
    },
    {
      name: "Psicologia Infantil",
      description: "A Psicologia Infantil é um ramo da ciência psicológica que se dedica ao estudo das questões psíquicas em crianças, investigando e analisando seu comportamento em várias áreas, como cognição, percepção, aflições emocionais, contexto social e aspectos físicos. Enquanto os pais geralmente priorizam a alimentação e o desenvolvimento físico de seus filhos, é igualmente crucial considerar o aspecto emocional e cognitivo das crianças. Nesse contexto, a Psicologia Infantil desempenha um papel fundamental ao compreender e abordar o funcionamento psicológico dos pequenos, sendo um elemento essencial dentro da ampla área das ciências psicológicas.",
      bgImgPath: 'https://oinstitutoneurodiversidade.com.br/wp-content/webp-express/webp-images/uploads/2022/10/psicologia-infantil.jpg.webp',
      fontawesomeIcon: 'fa-solid fa-stethoscope',
    },
    {
      name: "Fonoaudiologia",
      description: "O fonoaudiólogo é um profissional da área de saúde com formação de nível superior, dedicado a diversos aspectos da comunicação humana. Sua atuação abrange desde a prevenção até o aperfeiçoamento da função auditiva, linguagem oral e escrita, voz, fluência, articulação da fala, respiração, deglutição, entre outros. O profissional realiza avaliações, diagnósticos e terapias, buscando promover a saúde e o aprimoramento dessas áreas fundamentais para a comunicação e qualidade de vida.",
      bgImgPath: 'https://oinstitutoneurodiversidade.com.br/wp-content/webp-express/webp-images/uploads/2022/10/fono-jpg.png.webp',
      fontawesomeIcon: 'fa-solid fa-stethoscope',
    }
  ]

  constructor(private primaryBigCardService: PrimaryBigCardService){}

  ngOnInit() {
    this.cards = this.medicalServiceNames.map(service => {
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
