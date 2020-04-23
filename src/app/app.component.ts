import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Checkout',
      url: '/menu/checkout',
      icon: 'receipt',
      arrow: true
    },
    {
      title: 'Transactions',
      url: '/menu/transactions',
      icon: 'swap-vertical',
      arrow: true
    },
    {
      title: 'Items',
      url: '/menu/items',
      icon: 'list',
      arrow: true
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out',
      arrow: false
    }
  ];

  constructor(private navCtrl: NavController,
    private authService: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
      this.initializeApp();
    }
  logout(): void {
    if (this.selectedIndex === 3){
      this.authService.logout().then(() => {
        this.navCtrl.navigateRoot(['login']);
      })
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('menu/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
