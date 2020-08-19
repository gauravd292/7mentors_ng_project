import { MobParts } from './../products/mobiles/mob-parts';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MobDataService {
  constructor(private http: HttpClient) {}

  getMobParts() {
    return this.http.get<MobParts>('../../assets/api/mob-data.json');
  }
}
