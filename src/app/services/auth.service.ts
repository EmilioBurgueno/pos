import { Injectable } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;

  constructor(private afa: AngularFireAuth,
              private navCtrl: NavController,
              private alertController: AlertController) {
                this.afa.authState.subscribe((user) => {
                  if (user) {
                    this.setUser(user);
                  } else {
                    this.navCtrl.navigateRoot(['']);
                  }
                });
              }

  setUser(user): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  clearUser(): void {
    localStorage.removeItem('user');
    this.user = null;
  }
  
  isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return (user !== null && user !== undefined);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Invaild user and password. Please try again',
      buttons: ['Okay']
    });    await alert.present();
  }

  login(email: string, password: string): void {
    this.afa.auth.signInWithEmailAndPassword(email, password).then((credentials) => {
      this.setUser(credentials.user);
      this.navCtrl.navigateRoot(['/menu/checkout'])
    }).catch((error) => {
      this.presentAlert();
    })
  }

  logout(): Promise<void> {
    this.clearUser();
    return this.afa.auth.signOut();
  }
}
