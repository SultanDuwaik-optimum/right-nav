import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { DrawerContent, FieldConfig } from '../../../pages/tenant-accounts/types';

@Injectable({
  providedIn: 'root'
})
export class RightNavService {

  private _drawerContent: DrawerContent = {isForm:false, fields: []};

  private _form!: FormGroup;
  private _mainDrawerContent!: FieldConfig[];
  private _isOpen: boolean = false;

  private formSubmitted = new BehaviorSubject<FormGroup>(this.form);
  public data$ = this.formSubmitted.asObservable();

  get isOpen(): boolean{
    return this._isOpen;
  }

  toggleDrawer(){
    this._isOpen = !this._isOpen;
  }
  
  closeDrawer(){
    this._isOpen = false;
  }

  get mainDrawerContent(): any {
    return this._mainDrawerContent;
  }

  get form(): FormGroup{
    return this._form;
  }

  set form(formGroup: FormGroup) {
    this._form = formGroup;
  }

  set mainDrawerContent(drawerContent: FieldConfig[]){
    this._mainDrawerContent = drawerContent;
  }

  setData(){
    this.formSubmitted.next(this.form.value);
  }

  set drawerContent(drawerContent: DrawerContent){
    this._drawerContent = drawerContent;
  }

  get drawerContent(): DrawerContent {
    return this._drawerContent;
  }
}
