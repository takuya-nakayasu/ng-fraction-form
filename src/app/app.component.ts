import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Fraction } from './entity/fraction';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public fractionParentFormGroup: FormGroup;
  public fraction: Fraction;

  public ngOnInit() {
    this.fraction = new Fraction();
  }
}
