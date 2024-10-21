import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userGetInfo, userLogout } from 'src/app/store/cources/actions/user.actions';
import { selectUsers } from 'src/app/store/cources/selectors/user.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private store: Store,
    private router: Router,
  ) { }

  public userInfo$ = this.store.select(selectUsers);

  ngOnInit() {
    this.store.dispatch(userGetInfo());
    debugger
  }

  logout() {
    this.store.dispatch(userLogout());
    this.router.navigate(['/login']);
  }
  
}
