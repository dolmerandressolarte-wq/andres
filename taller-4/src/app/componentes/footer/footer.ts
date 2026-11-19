import { Component } from '@angular/core';
import { FooterItem } from '../footer-item/footer-item';

@Component({
  selector: 'app-footer',
  imports: [FooterItem],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {}