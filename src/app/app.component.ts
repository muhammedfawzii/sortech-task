import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumberParentComponent } from "./components/number-parent/number-parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NumberParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sortechh';
}
