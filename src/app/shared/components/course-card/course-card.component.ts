import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() card: CourseCard = {
    imgPath: '/assets/sections/courses/product-cover-1.png',
    title: 'Health Queries',
    subtitle: 'sit amet nulla facilisi morbi',
    description: 'We focus on ergonomics and meeting you....',
    sales: '15 Sales',
    price1: '$16.48',
    price2: '$6.48',
  }
}

export interface CourseCard {
  imgPath: string,
  title: string,
  subtitle: string,
  description: string,
  sales: string,
  price1: string,
  price2: string,
}
