export interface DrawerContent {
  isForm: boolean,
  fields: FieldConfig[],
}

export type FieldConfig =
  | InputField
  | TextField
  | ParagraphField
  | SelectField
  | TextAreaField
  | ButtonField
  | DividerField
  | CheckboxField
  | RadioField
  | HeaderField
  | Row;

export interface ParagraphField {
  type: 'paragraph';
  text: string;
  isHTML?: boolean;
}

export interface InputField {
  type: 'input';
  inputType: 'text' | 'email' | 'password' | 'number';
  label: string;
  formControlName: string;
  placeholder?: string;
  value?: any;
  validators?: any[];
}

export interface SelectField {
  type: 'select';
  label: string;
  formControlName: string;
  options: { value: any; label: string }[];
  placeholder?: string;
  value?: any;
  validators?: any[];
}

export interface TextAreaField {
  type: 'textarea';
  label: string;
  formControlName: string;
  placeholder?: string;
  value?: any;
  validators?: any[];
}

export interface CheckboxField {
  type: 'checkbox';
  label: string;
  formControlName: string;
  value?: boolean;
  validators?: any[];
}

export interface RadioField {
  type: 'radio';
  label: string;
  formControlName: string;
  options: { value: any; label: string }[];
  value?: any;
  validators?: any[];
}

export interface ButtonField {
  type: 'button';
  label: string;
  buttonType: 'submit' | 'reset' | 'button';
  isDisabled?: boolean;
  event: ()=>void
}

export interface TextField {
  type: 'text';
  text: string;
}

export interface HeaderField {
  type: 'header';
  text: string;
}

export interface DividerField {
  type: 'divider';
  inset?: boolean;
}

export interface Row {
  type: 'row',
  children: FieldConfig[], 
}
