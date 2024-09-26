import { RightNavService } from './shared/right-nav/services/right-nav.service';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RightNavComponent } from "./shared/right-nav/right-nav.component";
import { SidenavComponent } from "./layouts/sidenav/sidenav.component";
import { NavItem } from './layouts/sidenav/types';
import { HeaderComponent } from "./layouts/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RightNavComponent, SidenavComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private router: Router, private rightNavService:  RightNavService){

  }

  navItems: NavItem[] = [
    {
      icon: `assets/icons/dashboard.svg`,
      name: 'home',
      label: 'Home',
      event: () => {
        this.rightNavService.closeDrawer();
        this.router.navigate(['home']);
      },
    },
    {
      icon: `assets/icons/accounts.svg`,
      label: 'Accounts',
      name: 'tenant-accounts',
      event: () => {
        this.rightNavService.closeDrawer();
        this.router.navigate(['tenant-accounts']);
      },
    },
  ];

}
