import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent {
  rootImgsPath = '/assets/sections/testimonials/';
  reviewArray = [0, 1, 2, 3, 4];
  @Input() card: TestimonialCard = {
    title: '',
    subtitle: '',
    body: "",
    review: 0,
    coverPath: ''
  }
  starImgPath = {
    filled: this.rootImgsPath + 'star-review-filled.svg',
    empty: this.rootImgsPath + 'star-review-empty.svg'
  }
}
export interface TestimonialCard {
  title: string,
  subtitle?: string,
  body: string,
  review: 0 | 1 | 2 | 3 | 4 | 5,
  coverPath?: string
}
