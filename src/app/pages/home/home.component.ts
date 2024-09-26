import { DrawerContent } from './../tenant-accounts/types';
import { Component } from '@angular/core';
import { RightNavService } from '../../shared/right-nav/services/right-nav.service';
import { RightNavTogglerDirective } from '../../shared/right-nav/directives/right-nav-toggler.directive';
import { FieldConfig } from '../tenant-accounts/types';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RightNavTogglerDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {



  fields: FieldConfig[] = [
    {
      type: 'header',
      text: 'User Registration'
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'Full Name',
      formControlName: 'fullName',
      placeholder: 'Enter your full name',
      validators: [Validators.required]
    },
    {
      type: 'input',
      inputType: 'email',
      label: 'Email',
      formControlName: 'email',
      placeholder: 'Enter your email',
      validators: [Validators.required, Validators.email]
    },
    {
      type: 'textarea',
      label: 'Address',
      formControlName: 'address',
      placeholder: 'Enter your address'
    },
    {
      type: 'checkbox',
      label: 'I accept the terms and conditions',
      formControlName: 'terms',
      value: false
    },
    {
      type: 'button',
      label: 'Register',
      buttonType: 'submit',
      isDisabled: false,
      event: () => {
        console.log("fff");
      }
    }
  
  ];

  drawerContent: DrawerContent = {
    isForm: true,
    fields: this.fields
  };

  constructor(private rightNavService: RightNavService){}

  toggleDrawer(){
    this.rightNavService.toggleDrawer()
  }

  onFormValuesChange(values: any) {
  }

}
