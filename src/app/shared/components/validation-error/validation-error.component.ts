import { Component, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-validation-error',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './validation-error.component.html',
  styleUrl: './validation-error.component.scss'
})
export class ValidationErrorComponent {
  @Input({ alias: 'formGroupInput' }) formGroup!: FormGroup;
  @Input({ alias: 'formControlNameInput' }) formControlName!: string;
  @Input() maxValue: number = 0;
  @Input() minValue: number = 0;
  @Input() maxLength: number = 0;
  @Input() minLength: number = 0;

  constructor(){}
  
  get formControl() {
    return this.formGroup?.get(this.formControlName);
  }
  
  get isRequired() {
    if (!this.formControl) return false;
    return this.formControl.hasValidator(Validators.required);
  }
}
