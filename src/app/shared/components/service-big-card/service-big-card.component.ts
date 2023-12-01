import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { PrimaryBigCardService } from './primary-big-card.service';

@Component({
  selector: 'app-service-big-card',
  templateUrl: './service-big-card.component.html',
  styleUrls: ['./service-big-card.component.scss']
})
export class ServiceBigCardComponent implements OnInit {
  @Input() isPopUp = true;
  @Input() model?: BigCard;
  private _hide = true;

  constructor(private primaryBigCardService: PrimaryBigCardService) {
    if(this.isPopUp)
      primaryBigCardService.$card.subscribe(card => {
        this.model = card;
        this._hide = !card;
      });
  }

  ngOnInit() {
  }

  close = () => {
    if (!this.isPopUp)
      return;

    this._hide = true;
    setTimeout(() => {
      this.primaryBigCardService.close();
    }, 300);
  };

  @HostBinding('class.is-popup') get _isPopUp() { return this.isPopUp };
  @HostBinding('class.show') get show() { return !!this.model || !this.isPopUp };
  @HostBinding('class.hide') get hide() { return this._hide && this.isPopUp };
  @HostBinding('class.hidden') get hidden() { return !this.model && this._hide && this.isPopUp };
}

export interface BigCard {
  bgPath?: string,
  title?: string,
  body?: string,
  externalLink?: string
}
