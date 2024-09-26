import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RightNavService } from './services/right-nav.service';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-right-nav',
  standalone: true,
  imports: [
    MatSidenavModule,
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  templateUrl: './right-nav.component.html',
  styleUrl: './right-nav.component.scss',
})
export class RightNavComponent {

  constructor(private rightNavService: RightNavService) {}

  toggleDrawer() {
    this.rightNavService.toggleDrawer();
  }

  isDrawerOpen(): boolean {
    return this.rightNavService.isOpen;
  }

  getMainDrawerContent(): any {
    return this.rightNavService.mainDrawerContent;
  }

  getDrawerContent(): any {
    return this.rightNavService.drawerContent;
  }

  getFormGroup(): FormGroup {
    return this.rightNavService.form;
  }

  closeDrawer(){
    this.rightNavService.closeDrawer();
  }

  sendData(){
    this.rightNavService.setData();
  }

}
