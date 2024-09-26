import { DrawerContent } from './../../../pages/tenant-accounts/types';
import { Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';
import { RightNavService } from '../services/right-nav.service';
import { CheckboxField, FieldConfig, InputField, RadioField, SelectField, TextAreaField } from '../../../pages/tenant-accounts/types';
import { FormBuilder, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appRightNavToggler]',
  standalone: true
})
export class RightNavTogglerDirective implements OnChanges{

  @Input() drawerContent! : DrawerContent;
  @Input() fields!: FieldConfig[];
  private form!: FormGroup;

  @Output() formValuesChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private rightNavService: RightNavService, 
    private fb: FormBuilder) { 

      this.rightNavService.data$.subscribe(data => {
        this.formValuesChange.emit(data);
      });  

     }

  ngOnChanges(): void {

    this.form = this.fb.group({});

    this.fields.forEach((field: FieldConfig) => {
      if (field.type === 'row' && field.children) {
        // If the field is of type 'row', iterate through its children
        field.children.forEach((childField: FieldConfig) => {
          if (this.isFormControlField(childField)) {
            this.form.addControl(
              childField.formControlName,
              this.fb.control(childField.value || '', childField.validators || [])
            );
          }
        });
      } else if (this.isFormControlField(field)) {
        // For other fields that are not rows
        this.form.addControl(
          field.formControlName,
          this.fb.control(field.value || '', field.validators || [])
        );
      }
    });
  
  }

  private isFormControlField(field: FieldConfig): field is (InputField | SelectField | TextAreaField | CheckboxField | RadioField) {
    return (
      field.type === 'input' ||
      field.type === 'select' ||
      field.type === 'textarea' ||
      field.type === 'checkbox' ||
      field.type === 'radio'
    );
  }
  

  setMainDrawerContent(){
    this.rightNavService.drawerContent = this.drawerContent;
    this.rightNavService.mainDrawerContent = this.fields;
    this.rightNavService.form = this.form;
  }

  @HostListener('click')
  onClick(): void {
    const sameContent = this.rightNavService.mainDrawerContent === this.fields;
    const isOpen = this.rightNavService.isOpen;
  
    if(sameContent) {
      this.rightNavService.toggleDrawer();
    } else {
      if(isOpen) {
        this.rightNavService.toggleDrawer();
        setTimeout(() => {
          this.setMainDrawerContent();
          this.rightNavService.toggleDrawer();
        }, 400);
      } else {
        this.setMainDrawerContent();
        this.rightNavService.toggleDrawer();
      }
    } 
  }

}
