import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-wrapper',
  templateUrl: './image-wrapper.component.html',
  styleUrls: ['./image-wrapper.component.scss']
})
export class ImageWrapperComponent {
  @Input() imgPath: string = '';
  @Input() shadowAt: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' = 'bottom-right';
}
