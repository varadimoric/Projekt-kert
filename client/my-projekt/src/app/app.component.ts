import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SingupComponentComponent } from './signup-component/singup-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
     LoginComponentComponent,
    SingupComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-projekt';
}
