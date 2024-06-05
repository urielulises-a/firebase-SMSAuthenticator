import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroComponent } from "./login/registro.component";
import { SmsLoginComponent } from './sms-login/sms-login.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AppComponent, RegistroComponent, SmsLoginComponent]
})
export class AppComponent {
  title = 'firebaseAuth';

  // http = inject("HttpClient"); TODO do we need this?
}
