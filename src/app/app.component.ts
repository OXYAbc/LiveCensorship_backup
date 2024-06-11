import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CameraComponent} from "./camera/camera.component";
import {AutoCompleteDirective} from "./directives/auto-completec-directive.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CameraComponent, AutoCompleteDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'liveCensorship';
}
