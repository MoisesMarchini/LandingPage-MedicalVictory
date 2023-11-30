import { Component, HostBinding, OnInit } from '@angular/core';
import { SectionModel } from '../section/section.component';
import { PrimaryBigCardService } from './primary-big-card.service';
import { SecondaryCard } from '../secondary-card/secondary-card.component';

@Component({
  selector: 'app-service-big-card',
  templateUrl: './service-big-card.component.html',
  styleUrls: ['./service-big-card.component.scss']
})
export class ServiceBigCardComponent implements OnInit {
  model?: BigCard;
  private _hide = true;

  constructor(private primaryBigCardService: PrimaryBigCardService) {
    primaryBigCardService.$card.subscribe(card => {
      this.model = card;
      this._hide = !card;
    });
  }

  ngOnInit() {
  }

  close = () => {
    this._hide = true;
    setTimeout(() => {
      this.primaryBigCardService.close();
    }, 300);
  };

  @HostBinding('class.show') get show() { return !!this.model };
  @HostBinding('class.hide') get hide() { return this._hide };

  @HostBinding('class.hidden') get hidden() { return !this.model && this._hide};
}

export interface BigCard {
  bgPath?: string,
  title?: string,
  body?: string,
  externalLink?: string
}
