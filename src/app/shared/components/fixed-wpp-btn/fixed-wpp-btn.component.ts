import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fixed-wpp-btn',
  templateUrl: './fixed-wpp-btn.component.html',
  styleUrls: ['./fixed-wpp-btn.component.scss']
})
export class FixedWppBtnComponent {
  wppChat = environment.departmentLinks.Queimados;
}
