import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styles: [],
})
export class ReactFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  formObj = new FormGroup({
    uNameObj: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    passObj: new FormControl('', Validators.required),
  });

  get uName() {
    return this.formObj.get('uNameObj');
  }
}
