import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: false,
})
export class LoginPage { 

  constructor(private router: Router) {}

  redirectToHome(){
    console.log('si');    
    this.router.navigate(['/tabs/tab3'])
  }

}
