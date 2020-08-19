import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styles: [],
})
export class TempFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  log(tempVar) {
    console.clear();
    console.log(tempVar);
    console.log(tempVar.value);
  }

  submitForm(formTempvar) {
    console.log(' formTempvar : ', formTempvar);
  }
}
