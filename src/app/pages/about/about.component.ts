import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  pageHeader = environment.sidePages.sobre;
}
