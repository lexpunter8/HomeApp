import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
import { User } from '../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = {
    username: 'test',
    password: 'test'
  };

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  tryLogin(){
    this.authService.login(this.user.username, this.user.password)
      .subscribe(r => {
        if (r.isSucces){
          this.router.navigateByUrl('/home');
          return;
        }
        alert('incorrct username/password combination')
      }, e => {
        alert(e);
      })
  }
}
