import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <p>
      <img src="../../../assets/img/home.png" width="100%" />
    </p>
  `,
})
export class HomeComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((res) => {
      console.clear();
      console.log('res : ', res);
      console.log('res : ', res.get('varName'));
    });
  }
}
