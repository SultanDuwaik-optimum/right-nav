import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@OptimumPartners/olive-uitk/src/components/button/src/public-api';
import { CommonModule } from '@angular/common';
import { NavItem } from './types';
import {
  MatIconModule,
  MatIconRegistry,
} from '@OptimumPartners/olive-uitk/src/components/icon/src/public-api';
import { MatSidenavModule } from '@OptimumPartners/olive-uitk/src/components/sidenav/src/public-api';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent implements OnInit {
  @Input() isOpen!: boolean;
  @Input() navItems!: NavItem[];

  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    private router: Router,
  ) {}

  ngOnInit(): void {
    for (let item of this.navItems) {
      this.matIconRegistry.addSvgIcon(
        item.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(item.icon),
      );
    }
  }

  public isItemSelected(navItem: NavItem) {
    const firstSegment = this.router.url.split('/')[1];
    return navItem.name === firstSegment;
  }
}
