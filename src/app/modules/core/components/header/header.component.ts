import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  public userInfo = this.authService.getUserInfo();

  @Input() isAuthenticated: boolean = false;
  @Output() close = new EventEmitter();


  get isLoggedIn(): boolean {
    // debugger
    return this.authService.isAuthenticated();
  }

  logout() {
    console.log("Выход " + localStorage.getItem("login"));
    this.close.emit();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
