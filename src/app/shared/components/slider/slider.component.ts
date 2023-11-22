import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit{
  loaded = false;
  @Input() slidesAmount = 0;
  @Input() slideTimer = 5000;
  @Input() slides: Slide[] = [];
  @Input() manualNavColor: string = 'white';

  manualNavArray: any[] = [];
  currentSlideOnScreen = 0;
  currentSlide = 0;
  private sliderSubject = new BehaviorSubject(this.currentSlide);
  sliderSubject$ = this.sliderSubject.asObservable();

  @ViewChild('slider') sliderRef?: ElementRef<HTMLDivElement>;

  skipNext = false;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.sliderRef){
      const element = this.sliderRef.nativeElement;

      this.slidesAmount = Math.round(element.scrollWidth / element.clientWidth);
      this.manualNavArray = Array(this.slidesAmount).fill(0);
    }
    this.loaded = true;
    this.sliderSubject$.subscribe(result => {
      result = result % this.slidesAmount;

      this.currentSlide = result;
      this.moveSlider(result);
    });

    this.playSlider();
  }

  playSlider() {
    if (!this.sliderRef)
      return;

    const element = this.sliderRef.nativeElement;

    this.sliderRef.nativeElement.addEventListener('scroll', () => {
      const currentSlideIndex = Math.round(element.scrollLeft / element.clientWidth);
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
    this.sliderSubject.next(this.currentSlide - 1);
  }

  setSlider(index: number) {
    this.skipNext = true;
    this.sliderSubject.next(index);
  }

  private moveSlider(index: number) {
    if (!this.sliderRef)
      return;

    const element = this.sliderRef.nativeElement;
    const elementWidth = element.clientWidth;
    const slidePosition = elementWidth * index;

    element.scrollLeft = slidePosition;
  }

  private isCurrentSlideOnScreen() {
    if (!this.sliderRef)
      return false;

    const element = this.sliderRef.nativeElement;
    const currentPosition = element.scrollLeft;
    const currentSlideIndex = this.currentSlideOnScreen;
    const slidePosition = element.clientWidth * this.currentSlide;

    this.sliderSubject.next(currentSlideIndex);

    return Math.abs(currentPosition - slidePosition) <= 10;
  }
}

export interface Slide {
  backgroundImg: string,
  title?: string,
  subtitle?: string,
  body?: string
}
