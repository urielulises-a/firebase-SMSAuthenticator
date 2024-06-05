import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {
  constructor(private fb: FormBuilder, private auth: AuthService) {}

  form: FormGroup = this.fb.group({
    email: ['', Validators.required],
    contrasenya: ['', Validators.required],
  });

  
  onSubmit() {
    console.log('Form submitted');
    if (this.form.valid) {
      const rawForm = this.form.getRawValue();

      this.auth.login(rawForm.email, rawForm.contrasenya).subscribe({
        next: () => {
          console.log('Logged in!');
          // Handle the logic here
        },
        error: (error: any) => {
          console.log('No log');
          console.error('Error:', error);
          // Handle the error here
        },
      });
    }
  }
}
