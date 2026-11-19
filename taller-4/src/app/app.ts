import { Component } from '@angular/core';
import { Header } from './componentes/header/header';
import { Sidebar } from './componentes/sidebar/sidebar';
import { Content } from './componentes/content/content';
import { Footer } from './componentes/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar, Content, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'taller-4';
}
