import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidepage-header',
  templateUrl: './sidepage-header.component.html',
  styleUrls: ['./sidepage-header.component.scss']
})
export class SidepageHeaderComponent {
  @Input() model: { title: string, subtitle: string } = { title: '', subtitle: ''};
}
