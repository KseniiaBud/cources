import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isAuthenticated:boolean=false;
  @Input() login:string|null="";
  @Output() close = new EventEmitter();
  constructor(
    private authService: AuthService
  ) {  }

  
  logout() {
    console.log("Выход " + localStorage.getItem("login"));
    this.close.emit();
    this.authService.logout();
  }
}
