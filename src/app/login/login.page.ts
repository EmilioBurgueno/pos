import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NavController , AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private navCtrl: NavController,
    private authService: AuthService,
    private alertController: AlertController) {
    if (this.authService.isLoggedIn()) {
      this.navCtrl.navigateRoot(['menu/checkout'])
    }
  }

  ngOnInit() {
    this.initForm();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: "The email address is badly formatted, or there's an empty field",
      buttons: ['Okay']
    });
    await alert.present();
  }
  

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const email = this.loginForm.controls.email.value;
      const password = this.loginForm.controls.password.value;
      this.authService.login(email, password);
    }
    else {
      this.presentAlert()
    }
  }
}
