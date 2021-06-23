import { Component, Input } from '@angular/core';

@Component({
  selector: 'banner-item',
  templateUrl: './banner-item.component.html',
  styleUrls: ['./banner-item.component.scss'],
})
export class BannerItemComponent {
  @Input() title = 'This is a title';
  @Input() content = 'I am the Content';
  @Input() background = 'red';
}
