import { Component, NgZone } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaVerifier, getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sms-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './sms-login.component.html',
  styleUrl: './sms-login.component.css',
})
export class SmsLoginComponent {
  form: FormGroup = this.fb.group({
    celular: ['', Validators.required],
  });

  recaptchaVerifier!: RecaptchaVerifier;

  constructor(
    private fb: FormBuilder,
    private fbs: FormBuilder,
    private auth: AuthService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {

    this.ngZone.runOutsideAngular(() => {
      this.recaptchaVerifier = new RecaptchaVerifier(
        getAuth(),
        'recaptcha-container',
        {
          size: 'normal',
          callback: (response: any) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            return response;
          },
        }
      );
      console.log('RecaptchaVerifier created');
      this.recaptchaVerifier.render().then(widgetId => {
        console.log('ReCAPTCHA rendered, widgetId is', widgetId);
      });
    });
  }

  formConfirmationSMS: FormGroup = this.fb.group({
    SMScode: ['', Validators.required],
  });
  
  confirmSMS: boolean = false; 
  onSubmit() {
    console.log('Form submitted');
    if (this.form.valid) {
      const rawForm = this.form.getRawValue();

      this.auth
        .loginWithSms(rawForm.celular, this.recaptchaVerifier)
        .subscribe({
          next: () => {
            this.confirmSMS = true;
            console.log('Message sent!');
            // Handle the logic here
          },
          error: (error: any) => {
            console.log('No message');
            console.error('Error:', error);
            // Handle the error here
          },
        });
    }
  }

  onConfirm() {
    const rawForm = this.formConfirmationSMS.getRawValue();
    this.auth.verifySmsCode(rawForm.SMScode).subscribe({
      next: () => {
        console.log('SMS code confirmed!');
        // Handle the logic here
      },
      error: (error: any) => {
        console.error('Error:', error);
        // Handle the error here
      },
    });
  }

}
