import { Component } from '@angular/core';
import { TestimonialCard } from 'src/app/shared/components/testimonial-card/testimonial-card.component';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  cards: TestimonialCard[] = [
    {
      title: 'Regina Miles',
      subtitle: 'Designer',
      body: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
      review: 4,
      coverPath: 'testimonial-user-cover-1.png'
    },
    {
      title: 'Regina Miles',
      subtitle: 'Designer',
      body: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
      review: 4,
      coverPath: 'testimonial-user-cover-2.png'
    },
  ]
}
