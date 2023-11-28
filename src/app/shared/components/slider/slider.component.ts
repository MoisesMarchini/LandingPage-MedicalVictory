import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit{
  @ViewChild('slider', {static: true}) sliderRef!: ElementRef;
  @Input() slideTimer = 5000;
  @Input() hideControl = false;
  @Input() controlMargin = false;
  @Input() circleControl = false;
  @Input() slides: any[] = [];
  @Input() manualNavColor: string = 'white';

  manualNavArray: any[] = [];
  isArrayOfSlideClass = false;
  private slidesAmount = 0;
  private slideWidth = 0;
  private sliderScrollLeft = () => this.sliderRef.nativeElement.scrollLeft?? 0;

  currentSlideOnScreen = 0;
  currentSlide = 0;
  private sliderSubject = new BehaviorSubject(this.currentSlide);
  sliderSubject$ = this.sliderSubject.asObservable();

  @HostListener('window:resize')
  resizeTask(){
    this.loadProperties();
  }

  skipNext = false;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.isArrayOfSlideClass = this.isSlideValid(this.slides[0]);
  }

  ngAfterViewInit(): void {
    this.loadProperties();
    this.sliderSubject$.subscribe(result => {
      const result2 = result % this.slidesAmount;

      this.currentSlide = result2;
      this.moveSlider(result2);
    });

    this.playSlider();
  }

  loadProperties() {
    setTimeout(() => {
      const sliderElement = this.sliderRef.nativeElement;
      this.slideWidth = this.getSlideWidth();
      const slidesOnScreen = sliderElement.clientWidth / this.slideWidth;

      this.slidesAmount = slidesOnScreen == 1 ? this.slides.length : Math.max(this.slides.length - (slidesOnScreen - 1), 1);

      this.manualNavArray = Array(Math.ceil(this.slidesAmount)).fill(0);
    }, 200);
  }

  private isSlideValid(obj: any): obj is Slide {
    return (
      obj &&
      typeof obj.backgroundImg === 'string' &&
      (typeof obj.title === 'string' || obj.title === undefined) &&
      (typeof obj.subtitle === 'string' || obj.subtitle === undefined) &&
      (typeof obj.body === 'string' || obj.body === undefined)
    );
  }

  playSlider() {
    if (!this.sliderRef)
      return;

    this.sliderRef.nativeElement.addEventListener('scroll', () => {
      const currentSlideIndex = Math.round(this.sliderScrollLeft() / this.slideWidth);
      this.currentSlideOnScreen = currentSlideIndex;
    })

    setInterval(() => {
      if (this.skipNext || !this.isCurrentSlideOnScreen()) {
        this.skipNext = false;
        return;
      }
      this.nextSlide();
    }, this.slideTimer)
  }

  nextSlide(manualTrigger = false) {
    this.skipNext = manualTrigger;
    this.sliderSubject.next(this.currentSlide + 1);
  }

  prevSlide(manualTrigger = false) {
    this.skipNext = manualTrigger;
    const prevSlide = this.currentSlide - 1;
    this.sliderSubject.next(prevSlide >= 0? prevSlide : this.slidesAmount - 1);
  }

  setSlider(index: number) {
    this.skipNext = true;
    this.sliderSubject.next(index);
  }

  private moveSlider(index: number) {
    if (!this.sliderRef)
      return;

    const element = this.sliderRef.nativeElement;
    const slidePosition = this.slideWidth * index;

    element.scrollLeft = slidePosition;
  }

  private isCurrentSlideOnScreen() {
    if (!this.sliderRef)
      return false;

    const element = this.sliderRef.nativeElement;
    const currentPosition = this.sliderScrollLeft();
    const currentSlideIndex = this.currentSlideOnScreen;
    const slidePosition = this.slideWidth * this.currentSlide;

    this.sliderSubject.next(currentSlideIndex);

    return Math.abs(currentPosition - slidePosition) <= 10;
  }

  private getSlideWidth() {
    if (!this.sliderRef)
      return 1;

    const element = this.sliderRef.nativeElement;
    const slidesElement = element.getElementsByClassName('slide');
    const slideElement = slidesElement.item(0);

    return slideElement?.clientWidth ?? 1;
  }
}

export interface Slide {
  backgroundImg: string,
  title?: string,
  subtitle?: string,
  body?: string
}
