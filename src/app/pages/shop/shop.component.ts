import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  pageHeader = environment.sidePages.loja;
}
