import { Component } from '@angular/core';
import { CourseCard } from 'src/app/shared/components/course-card/course-card.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  cards: CourseCard[] = [
    {
      imgPath: '/assets/sections/courses/product-cover-1.png',
      title: 'Health Queries',
      subtitle: 'sit amet nulla facilisi morbi',
      description: 'We focus on ergonomics and meeting you....',
      sales: '15 Sales',
      price1: '$16.48',
      price2: '$6.48',
    },
    {
      imgPath: '/assets/sections/courses/product-cover-2.png',
      title: 'Best dental surgeons',
      subtitle: 'bibendum arcu vitae',
      description: 'We focus on ergonomics and meeting you....',
      sales: '15 Sales',
      price1: '$16.48',
      price2: '$6.48',
    },
    {
      imgPath: '/assets/sections/courses/product-cover-3.png',
      title: 'Quick examination',
      subtitle: 'magna fringilla urna porttitor',
      description: 'We focus on ergonomics and meeting you....',
      sales: '15 Sales',
      price1: '$16.48',
      price2: '$6.48',
    },
    {
      imgPath: '/assets/sections/courses/product-cover-4.png',
      title: 'Emergency Case',
      subtitle: 'magna fringilla urna porttitor',
      description: 'We focus on ergonomics and meeting you....',
      sales: '15 Sales',
      price1: '$16.48',
      price2: '$6.48',
    },
  ]
}
