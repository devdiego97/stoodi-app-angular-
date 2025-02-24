import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CardConcourseComponent } from "./components/card-concourse/card-concourse.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stoody-concursos';
}
