import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

  loginAsLawson() {
    this.accountService.logout()
    const model = {
      username: 'lawson',
      password: 'Pa$$w0rd',
    };
    this.accountService.login(model).subscribe(() => {
      this.router.navigateByUrl('/members');
    });
  }

  loginAsEnid() {
    if(this.accountService){
      this.accountService.logout()
    }
    
    const model = {
      username: 'enid',
      password: 'Pa$$w0rd',
    };
    this.accountService.login(model).subscribe(() => {
      this.router.navigateByUrl('/members');
    });
  }
}
