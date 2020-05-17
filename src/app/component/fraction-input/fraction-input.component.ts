import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-fraction-input',
  templateUrl: './fraction-input.component.html',
  styleUrls: ['./fraction-input.component.scss'],
})
export class FractionInputComponent implements OnInit {
  public fractionFormGroup: FormGroup;
  public numeratorControl: FormControl;
  public denominatorControl: FormControl;

  constructor(private fb: FormBuilder) {}

  public ngOnInit() {
    this.createForm();
    this.numeratorControl = this.fractionFormGroup.get(
      'numerator'
    ) as FormControl;
    this.denominatorControl = this.fractionFormGroup.get(
      'denominator'
    ) as FormControl;
  }

  private createForm() {
    this.fractionFormGroup = this.fb.group({
      numerator: ['', []],
      denominator: ['', []],
    });
  }
}
