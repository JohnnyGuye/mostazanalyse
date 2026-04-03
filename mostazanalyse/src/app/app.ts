import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { FooterComponent } from './components/footer/footer.component';
import { CatComponent } from "./components/cat/cat.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, FooterComponent, CatComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mostazanalyse');
}
