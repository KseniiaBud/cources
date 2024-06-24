import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isAuthenticated:boolean=false;
  @Output() close = new EventEmitter();
  constructor(
    private authService: AuthService,
    private router: Router,
    private breadcrumbsService:BreadcrumbsService
  ) {  }

  
  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
  get getUserInfo(): string {
    return this.authService.getUserInfo();
  }
  logout() {
    console.log("Выход " + localStorage.getItem("login"));
    this.close.emit();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
