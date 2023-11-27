import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() model?: SectionModel;
  @Input() customSectionClasses: string = '';
  @Input() customContainerClasses: string = '';
}

export interface SectionModel {
  sectionName?: string,
  title: string,
  description?: string
}
