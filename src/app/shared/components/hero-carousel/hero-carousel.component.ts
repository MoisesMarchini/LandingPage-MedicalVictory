import { keyframes } from '@angular/animations';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HeroCarouselComponent implements AfterViewInit{
  @Input() slides = [
    {
      title: "Instituto Neurodiversidade",
      subtitle: "Referência em Autismo, TDAH e Terapias Multidisciplinares",
      body: "Saiba mais sobre nossos serviços e unidades."
    },
    {
      title: "Vista Neurodiversidade",
      subtitle: "Inclusão para onde você for!",
      body: "Conheça nossa linha de produtos e apoie a causa."
    },
    {
      title: "Imersão sobre autismo",
      subtitle: "Para Pais e Profissionais do Rio de Janeiro",
      body: "Descubra mais sobre nossos cursos e capacitações."
    }
  ]
  currentSlide = 0;

  @ViewChild('carousel') carousel?: ElementRef<HTMLDivElement>;

  isHover = false;
  skipNext = false;
  get scrollLeft() {
    if(this.carousel)
      return this.carousel.nativeElement.scrollLeft;

    return 0;
  }

  constructor(private el: ElementRef){}
  ngAfterViewInit(): void {
    if (!this.carousel)
      return;

    const element = this.carousel.nativeElement;
    const elementWidth = element.clientWidth;
    const maxScroll = element.scrollWidth - elementWidth;
    setInterval(() => {
      if (this.isHover || this.skipNext) {
        this.skipNext = false;
        return;
      }

      let nextSlide = element.scrollLeft + elementWidth;
      if (element.scrollLeft >= maxScroll)
        nextSlide = 0;

      element.scrollLeft = nextSlide;
    }, 2000)

    this.carousel.nativeElement.addEventListener('pointerenter', () => this.isHover = true)
    this.carousel.nativeElement.addEventListener('pointerleave', () => this.isHover = false)
    this.carousel.nativeElement.addEventListener('touchstart', () => this.isHover = true)
    this.carousel.nativeElement.addEventListener('touchend', () => this.isHover = false)

  }


  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}
