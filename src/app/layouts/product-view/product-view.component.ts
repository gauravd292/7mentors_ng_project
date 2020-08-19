import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
})
export class ProductViewComponent implements OnInit {
  data;
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((res) => {
      console.log('ProductViewComponent -> constructor -> res', res);
      console.log('-> res : ', res.get('prod'));
      console.log('-> resAll : ', res.getAll('prod'));

      this.data = res.get('prod');
      console.log(
        'ProductViewComponent -> constructor -> data',
        JSON.stringify(this.data)
      );
    });
  }

  ngOnInit(): void {}
}
