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
    title: 'The Best Reference',
    sectionName: 'Courses',
    description: "Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics"
  }
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
