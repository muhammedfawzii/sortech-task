import { Component, Input } from '@angular/core';
import { IFooterinfo } from '../core/ifooterinfo';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() info!: IFooterinfo;
}
