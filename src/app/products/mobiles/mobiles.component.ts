import { MobDataService } from './../../services/mob-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
})
export class MobilesComponent implements OnInit {
  constructor(private mobDataService: MobDataService) {
    console.log('2 Constructor Block...!');
  }

  // let lim = ()=> {}

  ngOnInit() {
    console.log('1 ngOnInit Block...!');

    // 1. data from 'Mock.ts'
    // this.mobParts = MOBPARTS;// [ 3-10 rec ]

    // 2. Data from 'Database'  //  [ 1000 + rec ]
    // let mobDataService = new MobDataService();
    // this.mobParts = mobDataService.getMobParts();
    // console.log(' this.mobParts', this.mobParts);

    // @angular/http -> limLog [ 25 ]
    // @angular/httpClient -> extLog  [ 35 ]
    // 3. Data from 'API'

    this.mobDataService.getMobParts().subscribe((res) => {
      console.clear();
      console.log('data', res['data']);
      this.mobParts = res['data'];
    });
  }

  ngOnDestroy() {
    console.log('3 ngOnDestroy Block...!');
    // this.mobParts = [];
  }

  ngAfterViewInit() {
    console.log('4 ngAfterViewInit Block...!');
  }

  ngAfterContentInit() {
    console.log('5 ngAfterContentInit Block...!');
  }

  num: number = 169;

  // mobParts: <MobParts>
  mobParts;

  calcProds() {
    let sum = 0;

    if (Array.isArray(this.mobParts))
      for (let mobPart of this.mobParts) {
        sum = sum + mobPart.inStock;
      }

    return sum;
  }

  upQuantity(mobPart) {
    if (mobPart.quantity < mobPart.inStock) mobPart.quantity++;
  }

  downQuantity(mobPart) {
    if (mobPart.quantity != 0) mobPart.quantity--;
  }

  catchVal(event) {
    // console.clear();
    console.log(' event : ', event);
  }
}
