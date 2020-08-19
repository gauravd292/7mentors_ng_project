import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
})
export class LaptopsComponent {
  num: any;
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((res) => {
      console.log('res : ', res.get('myNum'));

      this.num = res.get('myNum');
    });
  }
}
