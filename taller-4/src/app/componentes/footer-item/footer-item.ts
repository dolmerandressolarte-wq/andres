import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-item',
  imports: [],
  templateUrl: './footer-item.html',
  styleUrl: './footer-item.css'
})
export class FooterItem {
  @Input() texto: string = '';
}