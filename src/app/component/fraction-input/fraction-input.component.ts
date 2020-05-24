import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Fraction } from 'src/app/entity/fraction';

/**
 * 分数入力用コンポーネント
 *
 * @export
 * @class FractionInputComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-fraction-input',
  templateUrl: './fraction-input.component.html',
  styleUrls: ['./fraction-input.component.scss'],
})
export class FractionInputComponent implements OnInit {
  @Input() fraction: Fraction = new Fraction();
  @Output() fractionChange = new EventEmitter<Fraction>();

  public fractionFormGroup: FormGroup;
  // 分子
  public numeratorControl: FormControl;
  // 分母
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

  /**
   * reactive formの設定
   *
   * @private
   * @memberof FractionInputComponent
   */
  private createForm() {
    this.fractionFormGroup = this.fb.group({
      numerator: ['', []],
      denominator: ['', []],
    });
  }
}
