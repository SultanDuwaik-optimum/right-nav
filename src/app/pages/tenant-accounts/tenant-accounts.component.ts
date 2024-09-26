import { Component } from '@angular/core';
import { RightNavService } from '../../shared/right-nav/services/right-nav.service';
import { RightNavTogglerDirective } from '../../shared/right-nav/directives/right-nav-toggler.directive';
import { DrawerContent, FieldConfig } from './types';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-tenant-accounts',
  standalone: true,
  imports: [RightNavTogglerDirective],
  templateUrl: './tenant-accounts.component.html',
  styleUrl: './tenant-accounts.component.scss'
})
export class TenantAccountsComponent {

  fields0: FieldConfig[] = [
    {
      type: 'paragraph',
      text: 'This is a paragraph field that can contain some HTML content.',
      isHTML: true
    },
    {
      type: 'divider',
      inset: true 
    },
    {
      type: 'checkbox',
      label: 'Accept Terms and Conditions',
      formControlName: 'acceptTerms',
      value: false, 
      validators: [] 
    },
    {
      type: 'row',
      children: [
        {
          type: 'input',
          inputType: 'text',
          label: 'First Name',
          formControlName: 'firstName',
          placeholder: 'Enter your first name',
          value: '', 
          validators: [] 
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'Last Name',
          formControlName: 'lastName',
          placeholder: 'Enter your last name',
          value: '', 
          validators: [] 
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'Last Name',
          formControlName: 'lastName',
          placeholder: 'Enter your last name',
          value: '', 
          validators: [] 
        }
      ]
    },
    {
      type: 'radio',
      label: 'Choose your subscription type',
      formControlName: 'subscriptionType',
      options: [
        { value: 'free', label: 'Free' },
        { value: 'premium', label: 'Premium' }
      ],
      value: 'free', 
      validators: [] 
    }
  ];
  

  fields: FieldConfig[] = [
    {
      type: 'header',
      text: 'Sultan Duwaik'
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
      type: 'row',
      children: [{
        type: 'button',
        label: 'Register',
        buttonType: 'submit',
        isDisabled: false,
        event: () => {
          console.log("horay")
        }
      },
      {
        type: 'button',
        label: 'Cancel',
        buttonType: 'reset',
        isDisabled: false,
        event: () => {
          this.rightNavService.closeDrawer()
        }
      },]
    },
  ];
  fields2: FieldConfig[] = [
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
      type: 'row',
      children: [{
        type: 'button',
        label: 'Register',
        buttonType: 'submit',
        isDisabled: false,
        event: () => {
          console.log("horay")
        }
      },
      {
        type: 'button',
        label: 'Cancel',
        buttonType: 'reset',
        isDisabled: false,
        event: () => {
          this.rightNavService.closeDrawer()
        }
      },

    ]
    },
  ];

  drawerContent: DrawerContent = {
    isForm: true,
    fields: this.fields
  };


  fullName: string | undefined;
  email: string | undefined;
  address: string | undefined;

  constructor(private rightNavService: RightNavService){}


  onFormValuesChange(values: any) {
    this.fullName = values['fullName'];
    this.email = values['email'];
    this.address = values['address'];
  }
  
}
